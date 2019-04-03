var myName = "Tomás";
var age = 18;
var ignasiAge = 32;
var ageDiff = age - ignasiAge;

function a() {
  console.log("Starting JavaScript...");
  console.log(myName);
  console.log(age);
  console.log(ageDiff);
}
if(age<21){
  console.log("You're not older than 21");
} else if(age>21) {
  console.log("You're older than 21");
} else{
  console.log("You're 21");
}

if (ageDiff>0){
  console.log("Ignasi is younger than you");
} else if (ageDiff<0){
  console.log("Ignasi is older than you");
} else {
  console.log("You have the same age as Ignasi");
}
