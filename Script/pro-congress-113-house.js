var data;

fetch('https://api.propublica.org/congress/v1/113/senate/members.json',{
  method:"get",
  headers: {"X-API-key" : "d7q0qwNNDcgz8dsRKsx2RKJCEBgHy88iAPNM04cE"}
})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    data = myJson;
    JSON.stringify(data, null, 2));
    initialise();
  })
  .catch(function(error){
    console.log(error)
  });                                                                                                                                                                                                                                                                                                                                                                                                         
