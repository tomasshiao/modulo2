var hallo = JSON.stringify(data,null,2);
var tableHead = document.createElement("thead");
var tableBody = document.createElement("tbody");
document.getElementById("senate-data").innerHTML = tableHead += '<tr><th>Full Name</th><th>Party</th><th>State</th><th>Seniority</th><th>Percentage of votes with Party</th></tr>';
var fullName;
var senators = data.results[0].members.map(function(u) {
  var tableRow = tableBody.insertRow();
  if (u.middle_name === null) {
    fullName = u.last_name + ", " + u.first_name;
  } else {
    fullName = u.last_name + ",  " + u.first_name + " " + u.middle_name;
  }
  //
  // var cell = tableRow.insertCell();
  // function newCells(string) {
  //   cell.appendChild(document.createTextNode(string));
  // }
  tableRow.insertCell(0).appendChild(document.createTextNode(fullName + " "));
  tableRow.insertCell(1).appendChild(document.createTextNode(u.party + " "));
  tableRow.insertCell(2).appendChild(document.createTextNode(u.state + " "));
  tableRow.insertCell(3).appendChild(document.createTextNode(u.seniority + " "));
  tableRow.insertCell(4).appendChild(document.createTextNode(u.votes_with_party_pct + "%"));
});
//
//
// document.getElementById("senate-data").appendChild(tableHead);
document.getElementById("senate-data").appendChild(tableBody);
