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
let rep = [];
let dem = [];
let ind = [];
function crearListas(members){
  statistics.total = members.length;
    for(var i = 0; i<members.length; i++){
      if (members[i].party === "D"){
        dem.push(members[i]);
      }else if(members[i].party === "R"){
        rep.push(members[i]);
      } else if(members[i].party === "I") {
        ind.push(members[i]);
      }
    }
    statistics.number_of_democrats = dem.length;
    statistics.number_of_republicans = rep.length;
    statistics.number_of_independent = ind.length;
}
crearListas(members);
console.log(dem);
