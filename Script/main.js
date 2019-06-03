// function initialise(){
//   members = data.results[0].members,
//   senators = members.forEach(function(u) {
//   if (u.middle_name === null) {
//     fullName = u.last_name + ", " + u.first_name;
//   } else {
//     fullName = u.last_name + ",  " + u.first_name + " " + u.middle_name;
//   }
//   u.full_name = fullName;
//   })
//   var pair = members.map(x => Number(parseFloat((100 - x.missed_votes_pct) * (x.votes_with_party_pct / 100)).toPrecision(4)));
//   for (var i = 0; i < pair.length; i++) {
//   members[i] = {
//   ...members[i],
//   "effective_votes_with_party_pct": pair[i]
//   };
//   }
// }
var app = new Vue({
  el:"#tables",
  data: {
    filteredMembers: []}
});

function createTable(members){
  return app;
}
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
  console.log(filtrados);
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
