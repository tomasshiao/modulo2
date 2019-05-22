$(function(){
  var data;
  fetch("https://projects.propublica.org/api-docs/congress-api/members/").then(function(data){

  }).catch(function (){

  })
})
var members = data.results[0].members;
var statistics = {
  "number_of_democrats": 0,
  "number_of_republicans": 0,
  "number_of_independent": 0,
  "total": 0,
  "democrats_avg_vwp": 0,
  "republicans_avg_vwp": 0,
  "independent_avg_vwp": 0,
  "total_avg": 0,
  "least_engaged": [],
  "most_engaged": [],
  "least_loyal": [],
  "most_loyal": []
}
let rep = [];
let dem = [];
let ind = [];

function crearListas(members) {
  statistics.total = members.length;
  for (var i = 0; i < members.length; i++) {
    if (members[i].party === "D") {
      dem.push(members[i]);
      statistics.number_of_democrats = dem.length;
      statistics.democrats_avg_vwp += ((100 - members[i].missed_votes_pct) * (members[i].votes_with_party_pct / 100));
    } else if (members[i].party === "R") {
      rep.push(members[i]);
      statistics.number_of_republicans = rep.length;
      statistics.republicans_avg_vwp += ((100 - members[i].missed_votes_pct) * (members[i].votes_with_party_pct / 100));
    } else if (members[i].party === "I") {
      ind.push(members[i]);
      statistics.number_of_independent = ind.length;
      statistics.independent_avg_vwp += ((100 - members[i].missed_votes_pct) * (members[i].votes_with_party_pct / 100));
    }
  }
  statistics.democrats_avg_vwp = Number(parseFloat(statistics.democrats_avg_vwp / dem.length).toPrecision(4));
  statistics.republicans_avg_vwp = Number(parseFloat(statistics.republicans_avg_vwp / rep.length).toPrecision(4));
  statistics.independent_avg_vwp = Number(parseFloat(statistics.independent_avg_vwp / ind.length).toPrecision(4));
  statistics.total_avg = Number(parseFloat((statistics.democrats_avg_vwp + statistics.republicans_avg_vwp + statistics.independent_avg_vwp) / 3).toPrecision(5));
}
crearListas(members);

function showEngagement(order) {
  var ordenados = [];
  var sortedMembers = members.sort(function(a, b) {
    return order ? a.missed_votes_pct - b.missed_votes_pct : b.missed_votes_pct - a.missed_votes_pct
  })
  var limit = Math.round(sortedMembers.length * 0.1);
  var i = 0;
  while (i < limit || sortedMembers[i].missed_votes_pct == sortedMembers[i - 1].missed_votes_pct) {
    ordenados.push(sortedMembers[i]);
    i++;
  }
  return ordenados;
}
statistics.most_engaged = showEngagement(true);
statistics.least_engaged = showEngagement(false);

function showLoyalty(key, order) {
  var pair = members.map(x => Number(parseFloat((100 - x.missed_votes_pct) * (x.votes_with_party_pct / 100)).toPrecision(4)));
  for (var i = 0; i < pair.length; i++) {
    members[i] = {
      ...members[i],
      "effective_votes_with_party_pct": pair[i]
    };
  }
  var ordenados = [];
  var sortedMembers = members.sort(function(a, b) {
    return order ? a[key] - b[key] : b[key] - a[key];
  })
  var limit = Math.round(sortedMembers.length * 0.1);
  var i = 0;
  while (i < limit || (sortedMembers[i])[key] == (sortedMembers[i - 1])[key]) {
    ordenados.push(sortedMembers[i]);
    i++;
  }
  return ordenados;
}
statistics.most_loyal = showLoyalty("effective_votes_with_party_pct", false);
statistics.least_loyal = showLoyalty("effective_votes_with_party_pct", true);

var parties = [{
    party: "D",
    number_of_representatives: statistics.number_of_democrats,
    pct_vwp: statistics.democrats_avg_vwp
  },
  {
    party: "R",
    number_of_representatives: statistics.number_of_republicans,
    pct_vwp: statistics.republicans_avg_vwp
  },
  {
    party: "I",
    number_of_representatives: statistics.number_of_independent,
    pct_vwp: statistics.independent_avg_vwp
  },
  {
    party: "Total",
    number_of_representatives: statistics.number_of_democrats + statistics.number_of_republicans + statistics.number_of_independent,
    pct_vwp: statistics.total_avg
  }
]

function crearTablas(tablaUno, tablaDos, tablaTres, tablaCuatro) {
  let tableBody1;
  let tableBody2;
  let tableBody3;
  let tableBody4;
  let tableBody5;
  return tablaUno ? (
    document.getElementById("glance").innerHTML += "<thead><tr><th>Party</th><th>Number of Representatives</th><th>%Voted with party</th></tr></thead>",
    tableBody1 = document.createElement("tbody"),
    parties.forEach(function(x) {
      var rowT1 = tableBody1.insertRow();
      rowT1.insertCell(0).appendChild(document.createTextNode(x.party));
      rowT1.insertCell(1).appendChild(document.createTextNode(x.number_of_representatives));
      rowT1.insertCell(2).appendChild(document.createTextNode(x.pct_vwp + "%"));
      document.getElementById("glance").appendChild(tableBody1);
    })
  ) : (tablaDos ? (
    tablaTres ? (
      document.getElementById("mostEngaged").innerHTML += "<thead><tr><th>Name</th><th>Number of Missed Votes</th><th>%Missed</th></tr></thead>",
      tableBody2 = document.createElement("tbody"),
      (statistics.most_engaged).forEach(function(x) {
        var rowT2 = tableBody2.insertRow();
        var cell = rowT2.insertCell(0);
        var fullName;
        if (x.middle_name === null) {
          fullName = x.last_name + ", " + x.first_name;
        } else {
          fullName = x.last_name + ",  " + x.first_name + " " + x.middle_name;
        }
        fullName = '<a href="' + x.url + '">' + fullName + '</a>';
        cell.innerHTML = fullName;
        rowT2.insertCell(1).appendChild(document.createTextNode(x.missed_votes));
        rowT2.insertCell(2).appendChild(document.createTextNode(x.missed_votes_pct + "%"));
        document.getElementById("mostEngaged").appendChild(tableBody2);
      })
    ) : (
      document.getElementById("leastEngaged").innerHTML += "<thead><tr><th>Name</th><th>Number of Missed Votes</th><th>%Missed</th></tr></thead>",
      tableBody3 = document.createElement("tbody"),
      (statistics.least_engaged).forEach(function(x) {
        var rowT3 = tableBody3.insertRow();
        var cell = rowT3.insertCell(0);
        var fullName;
        if (x.middle_name === null) {
          fullName = x.last_name + ", " + x.first_name;
        } else {
          fullName = x.last_name + ",  " + x.first_name + " " + x.middle_name;
        }
        fullName = '<a href="' + x.url + '">' + fullName + '</a>';
        cell.innerHTML = fullName;
        rowT3.insertCell(1).appendChild(document.createTextNode(x.missed_votes));
        rowT3.insertCell(2).appendChild(document.createTextNode(x.missed_votes_pct + "%"));
        document.getElementById("leastEngaged").appendChild(tableBody3);
      })
    )
  ) : (
    tablaCuatro ? (
      document.getElementById("mostLoyal").innerHTML += "<thead><tr><th>Name</th><th>Number of Party Votes</th><th>%Party Votes</th></tr></thead>",
      tableBody4 = document.createElement("tbody"),
      (statistics.most_loyal).forEach(function(x) {
        var rowT4 = tableBody4.insertRow();
        var cell = rowT4.insertCell(0);
        var fullName;
        if (x.middle_name === null) {
          fullName = x.last_name + ", " + x.first_name;
        } else {
          fullName = x.last_name + ",  " + x.first_name + " " + x.middle_name;
        }
        fullName = '<a href="' + x.url + '">' + fullName + '</a>';
        cell.innerHTML = fullName;
        rowT4.insertCell(1).appendChild(document.createTextNode(Math.round((x.total_votes) * ((x.votes_with_party_pct) / 100))));
        rowT4.insertCell(2).appendChild(document.createTextNode(x.effective_votes_with_party_pct + "%"));
        document.getElementById("mostLoyal").appendChild(tableBody4);
      })
    ) : (
      document.getElementById("leastLoyal").innerHTML += "<thead><tr><th>Name</th><th>Number of Party Votes</th><th>%Party Votes</th></tr></thead>",
      tableBody5 = document.createElement("tbody"),
      (statistics.least_loyal).forEach(function(x) {
        var rowT5 = tableBody5.insertRow();
        var cell = rowT5.insertCell(0);
        var fullName;
        if (x.middle_name === null) {
          fullName = x.last_name + ", " + x.first_name;
        } else {
          fullName = x.last_name + ",  " + x.first_name + " " + x.middle_name;
        }
        fullName = '<a href="' + x.url + '">' + fullName + '</a>';
        cell.innerHTML = fullName;
        rowT5.insertCell(1).appendChild(document.createTextNode(Math.round((x.total_votes) * ((x.votes_with_party_pct) / 100))));
        rowT5.insertCell(2).appendChild(document.createTextNode(x.effective_votes_with_party_pct + "%"));
        document.getElementById("leastLoyal").appendChild(tableBody5);
      })
    )
  ))
}
crearTablas(true, false, false, false);
