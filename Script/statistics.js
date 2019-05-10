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
    members.filter(function(members){
      if (members.party === "D"){
        statistics.number_of_democrats+1;
        return members;
      }else if(members.party === "R"){
        statistics.number_of_republicans+1;
        return members;
      } else if(members.party === "I") {
        statistics.number_of_independent+1;
        return members;
      }
    })
}
listas(members);
console.log(statistics.number_of_democrats);
