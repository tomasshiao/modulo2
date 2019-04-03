//JavaScript Basics
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

//JavaScript Arrays
//Ex 1
function exUno(){
var names = ['Silvana Darlik', 'Matías Guerrero', 'Hernán', 'Miriam', 'Agustina Oficialdegui', 'Alejandro Belo', 'Alejandro Raffo', 'Amad Saed', 'Cristian Cahe', 'Regina Molares', 'Nahuel Correa', 'Elizabeth Sainz', 'Federico Viola', 'Tomás Shiao', 'Genaro Di Martino', 'Iara Baya', 'Inés Ehulech', 'José Luis González', 'Joseph Flores', 'Leonardo López', 'Lighuen Gerónimo', 'Luz Marina Pereira', 'Marco A. López', 'Mateo Barreiros'];
names.sort();
console.log(names[0]);
console.log(names[names.length - 1]);
for(var i=0;i<names.length;i++){
  console.log(names[i]);
}
}
//Ex 2
var ages = [43, 32, 27, 23, 24, 36, 31, 25, 19, 48, 44, 43, 25, 48, 38];
var k = 0;
while (k<ages.length){
  if(ages[k] % 2 == 0){
  console.log(ages[k]);
  k++;
}
}
/*for (var m=0; m<ages.length; m++){
  if (ages[m]%2==0){
    console.log(ages[m]);
  }
}*/
