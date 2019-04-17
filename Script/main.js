var senators = data.results[0].members.map(function (u){
if(u.middle_name === null){
  return u.last_name + ", " + u.first_name;
} else {
  return u.last_name + ",  " + u.first_name + " " + u.middle_name;
}
});
//Nombres en diferentes tr
var senadores = senators;
for(var i=0; i<senators.length;i++){
  let senador = document.createTextNode(senadores[i]);
  document.getElementById("senate-data").insertRow().insertCell().appendChild(senador);
}
//Partidos de los senadores
var party = data.results[0].members.map(function (x){
  if(x.party === "R"){
    return "R";
  } else if (x.party === "D"){
    return "D";
  } else {
    return "I";
  }
});
var tabla = document.getElementById("senate-data");
    // for (i = 0; i < tabla.rows.length; i++) {
    //     createCell(tabla.rows[i].insertCell(tbl.rows[i].cells.length));
        for(var u=0; u<party.length; u++){
        let partido = document.createTextNode(party[u]);
        document.getElementById("senate-data").HTMLTableRowElement().insertCell(0).appendChild(partido);
      }
    // }
