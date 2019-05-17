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
        statistics.democrats_avg_vwp += ((100-members[i].missed_votes_pct)*(members[i].votes_with_party_pct/100));
      }else if(members[i].party === "R"){
        rep.push(members[i]);
        statistics.number_of_republicans = rep.length;
        statistics.republicans_avg_vwp += ((100-members[i].missed_votes_pct)*(members[i].votes_with_party_pct/100));
      } else if(members[i].party === "I") {
        ind.push(members[i]);
        statistics.number_of_independent = ind.length;
        statistics.independent_avg_vwp += ((100-members[i].missed_votes_pct)*(members[i].votes_with_party_pct/100));
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
var party_data = [{
  "party": "Democrats",
  "representatives":statistics.number_of_democrats,
  "avg_vwp": statistics.democrats_avg_vwp
},
{
  "party": "Republicans",
  "representatives": statistics.number_of_republicans,
  "avg_vwp": statistics.republicans_avg_vwp
},
{
  "party": "Independent",
  "representatives": statistics.number_of_independent,
  "avg_vwp": statistics.independent_avg_vwp
}]
var tableBody = document.createElement("tbody");

// function crearTablaAtAGlance(party_data){
//   var parties = party_data.forEach(function(u){
//     var tableRow = tableBody.insertRow();
//     tableRow.className = "rowBody";
//     tableRow.insertCell(0).appendChild(document.createTextNode(u.party));
//     tableRow.insertCell(1).appendChild(document.createTextNode(u.representatives));
//     tableRow.insertCell(2).appendChild(document.createTextNode(u.avg_vwp));
//     document.getElementById("glance").appendChild(tableBody);
//   })
// }
// crearTablaAtAGlance(statistics);

// function showEngagement(array){
//   let attendance = []; //most engaged
//    for(var i=0; i<array.length; i++){
//      attendance.push(array[i].missed_votes_pct);
//    }
//    attendance.sort((a,b)=> a-b);
//    var diezPorciento = Math.round(attendance.length * 0.1);
//   for(var i=0; i<diezPorciento;i++){
//     (statistics.most_engaged).push(array[i]);
//   }
//   console.log(statistics.most_engaged);
//   var i = diezPorciento +1;
//   while((i<attendance.length) && (statistics.most_engaged[11].missed_votes_pct === attendance[i].missed_votes_pct)){
//     (statistics.most_engaged).push(attendance[i]);
//     i++;
//   }
//   console.log(statistics.most_engaged);
//   // var reversedAttendance = attendance.reverse();
//   // console.log(attendance);
//   // console.log(reversedAttendance);
// }
// showEngagement(members);
function showEngagement(key, order){
  var ordenados = members.sort(function(a,b){
    return order ? a.missed_votes_pct - b.missed_votes_pct : b.missed_votes_pct - a.missed_votes_pct
  })
    return ordenados;
}
var most_engaged = showEngagement("missed_votes_pct", true);
//console.log(statistics.most_engaged.map(x => x.missed_votes_pct));
//statistics.most_engaged = (statistics.most_engaged).reverse();
//console.log(statistics.most_engaged);
var least_engaged = showEngagement("missed_votes_pct", false);
//console.log(statistics.least_engaged);
//console.log(statistics.least_engaged.map(x => x.missed_votes_pct));
