var data;
var members;
var fullName;
var senators;
fetch('https://api.propublica.org/congress/v1/113/house/members.json',{
  method: "get",
  headers: {"X-API-key" : "d7q0qwNNDcgz8dsRKsx2RKJCEBgHy88iAPNM04cE"}
})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson,
    members = data.results[0].members,
    app.filteredMembers = members,
    initialise(),
    createTable(members);
})
  .catch(function(error){
     console.log("error")
  })
  function initialise(){
    members = data.results[0].members,
    senators = members.forEach(function(u) {
    if (u.middle_name === null) {
      fullName = u.last_name + ", " + u.first_name;
    } else {
      fullName = u.last_name + ",  " + u.first_name + " " + u.middle_name;
    }
    u.full_name = fullName;
    })
    var pair = members.map(x => Number(parseFloat((100 - x.missed_votes_pct) * (x.votes_with_party_pct / 100)).toPrecision(4)));
    for (var i = 0; i < pair.length; i++) {
    members[i] = {
    ...members[i],
    "effective_votes_with_party_pct": pair[i]
    };
    }
  }
