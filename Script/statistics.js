var hallo = JSON.stringify(data, null, 2);
var members = data.results[0].members;
var statistics =
[{
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
}]

function listas(members){
  statistics.total = members.length;
    members.filter(function(members){
      if (members.party === "D"){
        return statistics.number_of_democrats+1;
      }else if(members.party === "R"){
        return statistics.number_of_republicans+1;
      } else if(members.party === "I") {
        return statistics.number_of_independent+1;
      }
    })
}
listas(members);
console.log(statistics.number_of_democrats);
