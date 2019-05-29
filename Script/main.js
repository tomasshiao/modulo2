function initialise(){
  // var members = data.results[0].members;
  crearTabla(members);
  return members;
}
document.getElementById("tablas").innerHTML += '<tr><th>Full Name</th><th>Party</th><th>State</th><th>Seniority</th><th>Percentage of votes with Party</th></tr>';
var tableHead = document.createElement("thead");
var tableBody = document.createElement("tbody");
tableBody.setAttribute('id', 'tabla');
function crearTabla(members) {
  members = filterMembers(members);
  var fullName;
  var senators = members.forEach(function(u) {
    var tableRow = tableBody.insertRow();
    tableRow.className = "rowBody";
    if (u.middle_name === null) {
      fullName = u.last_name + ", " + u.first_name;
    } else {
      fullName = u.last_name + ",  " + u.first_name + " " + u.middle_name;
    }

    fullName = '<a href="' + u.url + '">' + fullName + '</a>';
    var celda = tableRow.insertCell(0);
    celda.innerHTML = fullName;
    tableRow.insertCell(1).appendChild(document.createTextNode(u.party));
    tableRow.insertCell(2).appendChild(document.createTextNode(u.state));
    tableRow.insertCell(3).appendChild(document.createTextNode(u.seniority));
    tableRow.insertCell(4).appendChild(document.createTextNode(u.votes_with_party_pct + "%"));
  });

  document.getElementById("tablas").appendChild(tableBody);
}
var members = initialise();
function filterMembers(members) {
  var checkBoxes = document.querySelectorAll('input[name=party-filter]:checked')
  checkedBoxes = Array.from(checkBoxes)
  checkedBoxes = checkedBoxes.map(function(element) {
    return element.value;
  })
  var filtrados = [];
  filtrados = members.filter(function(members) {
    if (checkedBoxes.includes(members.party)) {
      return members;
    }
  });
  console.log(filtrados);
  if (filterState() !== "todos") {
    filtrados = filtrados.filter(senador => filterState() == senador.state )
    return filtrados;
    console.log(filtrados);
  } else if (filterState() == "todos") {
    return filtrados;
    console.log(filtrados);
  }
}

function filterState() {
  var state = document.querySelector('#state-filter').value;
  return state;
}

function clearTable() {
  $(".rowBody").remove();
  crearTabla(filterMembers(members));
}
function usingVue(members){
  var members = new Vue({
    el: "#newTable",
    data: {
      filtered: members;
    }
  })
}
