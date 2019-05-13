var members = data.results[0].members;
var statistics =
{
  "number_of_democrats": 0,
  "number_of_republicans": 0,
  "number_of_independent": 0,
  "total": 0,
  "democrats_avg_vwp": 0,
  "republicans_avg_vwp": 0,
  "inependent_avg_vwp": 0,
  "least_engaged": [],
  "most_engaged": [],
  "least_loyal": [],
  "most_loyal":[]
}
console.log(statistics.number_of_democrats);
function crearListas(members){
  statistics.total = members.length;
    for(var i = 0; i>members.length; i++){
      if (members[i].party === "D"){
        statistics.number_of_democrats++;
      }else if(members.party === "R"){
        statistics.number_of_republicans++;
      } else if(members.party === "I") {
        statistics.number_of_independent++;
      }
    }
}
crearListas(members);
console.log(statistics.number_of_democrats);
