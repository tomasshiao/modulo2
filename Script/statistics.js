var members = data.results[0].members;
var statistics =
{
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
  "most_loyal":[]
}
let rep = [];
let dem = [];
let ind = [];
function crearListas(members){
  statistics.total = members.length;
    for(var i = 0; i<members.length; i++){
      if (members[i].party === "D"){
        dem.push(members[i]);
        statistics.number_of_democrats = dem.length;
        statistics.democrats_avg_vwp += members[i].votes_with_party_pct;
      }else if(members[i].party === "R"){
        rep.push(members[i]);
        statistics.number_of_republicans = rep.length;
        statistics.republicans_avg_vwp += members[i].votes_with_party_pct;
      } else if(members[i].party === "I") {
        ind.push(members[i]);
        statistics.number_of_independent = ind.length;
        statistics.independent_avg_vwp += members[i].votes_with_party_pct;
      }
    }
    statistics.democrats_avg_vwp = Number(parseFloat(statistics.democrats_avg_vwp/dem.length).toPrecision(4));
    statistics.republicans_avg_vwp = Number(parseFloat(statistics.republicans_avg_vwp/rep.length).toPrecision(4));
    statistics.independent_avg_vwp = Number(parseFloat(statistics.independent_avg_vwp/ind.length).toPrecision(4));
    statistics.total_avg = Number(parseFloat((statistics.democrats_avg_vwp + statistics.republicans_avg_vwp + statistics.independent_avg_vwp)/3).toPrecision(5));
}
crearListas(members);

var tableBody = document.createElement("tbody");
tableBody.setAttribute("id", "at-a-glance");
function crearTablaAtAGlance(statistics){

}
crearTablaAtAGlance(statistics);
