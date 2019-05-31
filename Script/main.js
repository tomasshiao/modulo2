// function initialise(){
//   // var members = data.results[0].members;
//   crearTabla(members);
//   return members;
// }
// var tableBody = document.createElement("tbody");
// tableBody.setAttribute('id', 'tabla');
// function crearTabla(members) {
//   members = filterMembers(members);
//   var fullName;
//   var senators = members.forEach(function(u) {
//     var tableRow = tableBody.insertRow();
//     tableRow.className = "rowBody";
//     if (u.middle_name === null) {
//       fullName = u.last_name + ", " + u.first_name;
//     } else {
//       fullName = u.last_name + ",  " + u.first_name + " " + u.middle_name;
//     }
//
//     var full_name = '<a href="' + u.url + '">' + fullName + '</a>';
//     u = {
//       ...u,
//       "full_name": fullName
//     };
//     var celda = tableRow.insertCell(0);
//     celda.innerHTML = full_name;
//     tableRow.insertCell(1).appendChild(document.createTextNode(u.party));
//     tableRow.insertCell(2).appendChild(document.createTextNode(u.state));
//     tableRow.insertCell(3).appendChild(document.createTextNode(u.seniority));
//     tableRow.insertCell(4).appendChild(document.createTextNode(u.votes_with_party_pct + "%"));
//   });
//
//   document.getElementById("tablas").appendChild(tableBody);
// }
//
// function createTable(members){
//   var app = new Vue({
//     el:"#tables",
//     data: {data: members}
//   });
// }

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
