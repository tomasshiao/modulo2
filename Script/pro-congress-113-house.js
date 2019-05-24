var data;

fetch('https://api.propublica.org/congress/v1/113/house/members.json',{
  method:"get",
  headers: {"X-API-key" : "d7q0qwNNDcgz8dsRKsx2RKJCEBgHy88iAPNM04cE"}
})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    initialize();
    console.log(JSON.stringify(myJson));
  })
  .catch(function(error){
    console.log(error);
  });
