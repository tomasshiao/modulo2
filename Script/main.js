var app = new Vue({
  el:"#tables",
  data: {
    filteredMembers: []}
});

function filterMembers() {
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
  if (filterState() !== "todos") {
    filtrados = filtrados.filter(senador => filterState() == senador.state )
  } else if (filterState() == "todos") {
  }

  app.filteredMembers = filtrados;
}

function filterState() {
  var state = document.querySelector('#state-filter').value;
  return state;
}
