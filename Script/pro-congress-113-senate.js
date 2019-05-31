var data;

fetch('https://api.propublica.org/congress/v1/113/senate/members.json',{
  method: "get",
  headers: {"X-API-key" : "d7q0qwNNDcgz8dsRKsx2RKJCEBgHy88iAPNM04cE"}
})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson,
    // JSON.stringify(data, null, 2));
    // initialise();
    members = data.results[0].members
    //console.log(members)
  })
  .then(createTables(members),
  filterMembers(members))
  .catch(function(error){
     console.log("error")
  })
  function createTables(members){
    var fullName;
    var senators = members.forEach(function(u) {
      if (u.middle_name === null) {
        fullName = u.last_name + ", " + u.first_name;
      } else {
        fullName = u.last_name + ",  " + u.first_name + " " + u.middle_name;
      u = {
        ...u,
        "full_name": fullName
      };
      }
      console.log(fullName);
    })
  var app = new Vue({
    el:"#tables",
    data: {data:members}
  });
  }
