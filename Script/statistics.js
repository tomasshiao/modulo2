var app = new Vue({
  el:"#app",
  data: {
    filteredMembers: [],
    statistics: {
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
  }
});

let rep = [];
let dem = [];
let ind = [];

function crearListas(members) {
  app.statistics.total = members.length;
  for (var i = 0; i < members.length; i++) {
    if (members[i].party === "D") {
      dem.push(members[i]);
      app.statistics.number_of_democrats = dem.length;
      app.statistics.democrats_avg_vwp += ((100 - members[i].missed_votes_pct) * (members[i].votes_with_party_pct / 100));
    } else if (members[i].party === "R") {
      rep.push(members[i]);
      app.statistics.number_of_republicans = rep.length;
      app.statistics.republicans_avg_vwp += ((100 - members[i].missed_votes_pct) * (members[i].votes_with_party_pct / 100));
    } else if (members[i].party === "I") {
      ind.push(members[i]);
      app.statistics.number_of_independent = ind.length;
      if(ind.length !== 0){
      app.statistics.independent_avg_vwp += ((100 - members[i].missed_votes_pct) * (members[i].votes_with_party_pct / 100)) || 0;
    } else {
      app.statistics.independent_avg_vwp += 0;
    }
    }
  }
  app.statistics.democrats_avg_vwp = Number(parseFloat(app.statistics.democrats_avg_vwp / dem.length).toPrecision(4));
  app.statistics.republicans_avg_vwp = Number(parseFloat(app.statistics.republicans_avg_vwp / rep.length).toPrecision(4));
  app.statistics.independent_avg_vwp = Number(parseFloat(app.statistics.independent_avg_vwp / ind.length ||0).toPrecision(4));
  app.statistics.total_avg = Number(parseFloat((app.statistics.democrats_avg_vwp + app.statistics.republicans_avg_vwp + app.statistics.independent_avg_vwp) / 3).toPrecision(5));
}

function showStatistics(key, order) {
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

function createTable(members){
  crearListas(members);
  app.statistics.most_engaged = showStatistics("missed_votes_pct", true);
  app.statistics.least_engaged = showStatistics("missed_votes_pct", false);
  app.statistics.most_loyal = showStatistics("effective_votes_with_party_pct", false);
  app.statistics.least_loyal = showStatistics("effective_votes_with_party_pct", true);
}
