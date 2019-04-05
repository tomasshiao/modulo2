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


if (age < 21) {
  console.log("You're not older than 21");
} else if (age > 21) {
  console.log("You're older than 21");
} else {
  console.log("You're 21");
}
if (ageDiff > 0) {
  console.log("Ignasi is younger than you");
} else if (ageDiff < 0) {
  console.log("Ignasi is older than you");
} else {
  console.log("You have the same age as Ignasi");
}

//JavaScript Arrays
//Ex 1
function exUno() {
  var names = ['Silvana Darlik', 'Matías Guerrero', 'Hernán', 'Miriam', 'Agustina Oficialdegui', 'Alejandro Belo', 'Alejandro Raffo', 'Amad Saed', 'Cristian Cahe', 'Regina Molares', 'Nahuel Correa', 'Elizabeth Sainz', 'Federico Viola', 'Tomás Shiao', 'Genaro Di Martino', 'Iara Baya', 'Inés Ehulech', 'José Luis González', 'Joseph Flores', 'Leonardo López', 'Lighuen Gerónimo', 'Luz Marina Pereira', 'Marco A. López', 'Mateo Barreiros'];
  names.sort();
  console.log(names[0]);
  console.log(names[names.length - 1]);
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}
//Ex 2
function exDos() {
  var ages = [43, 32, 27, 23, 24, 36, 31, 25, 19, 48, 44, 43, 25, 48, 38];
  var k = 0;
  while (k < ages.length) {
    if ((ages[k] % 2) == 0) {
      console.log(ages[k]);
    }
    k++;
  }
  for (var m = 0; m < ages.length; m++) {
    if (ages[m] % 2 == 0) {
      console.log(ages[m]);
    }
  }
}

// Ex 3
var array = [24, 26, 26, 63, 41, 74, 88, 64, 21, 10, 1, 86, 3, 51];
var l = 0;
var least = 999;
function numMenor(array) {
  while (l < array.length) {
    if(array[l]<array[l + 1] && least > array[l]){
      least = array[l];
      l++;
    }
    else {
      l++;
    }
  }
  console.log(least);
}
//Ex 4
var arrayDos = [62, 69, 32, 3, 25, 95, 356, 1958, 26536, 574364374, 35636, 4623632, 46, 462444, 3002];
var u = 0;
var most = 0;
function numMaynor(arrayDos) {
  while (l < arrayDos.length) {
    if(arrayDos[u]>arrayDos[u + 1] && most < arrayDos[u]){
      most = arrayDos[u];
      u++;
    }
    else {
      u++;
    }
  }
  console.log(most);
}
//Ex 5

//Ex 6

//Ex 7
/*myColor = ["Red", "Green", "White", "Black"];
var colours = [];

function colour(myColor, colours) {
  return myColor;
}
console.log(colours);*/
