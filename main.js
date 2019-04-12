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

var array = [24, 26, 26, 63, 41, 74, 64, 21, 10, 1, 86, 3, 51, 0];
function numMenor(array) {
  var smallest = 99999;
  for(var i=0; i<array.length; i++){
    if(smallest>array[i]){
      smallest = array[i];
    }
  }
  console.log(smallest);
}
//Ex 4
var arrayDos = [62, 69, 32, 3, 25, 95, 356, 1958, 265, 36, 574, 364374, 356, 36, 46, 236, 32, 46, 462, 444, 3002];
function numMayor(arrayDos) {
  var biggest = -99999;
  for(var i=0; i<array.length; i++){
    if(biggest<array[i]){
      biggest = array[i];
    }
}
  console.log(biggest);
}
//Ex 5
var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 1;

function exCinco(array, index) {
  console.log(array[index]);
}
//Ex 6
var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var numRepetidos = [];

function repetedNumbers(array) {
  for (var j = 0; j < array.length; j++) {
    var i = 0;
    while (i < array.length && i !== j) {
      if (array[i] == array[j]) {
        numRepetidos.push(array[i]);
      }
      j++;
    }
  }
  console.log(numRepetidos);
}
//Ex 7
var myColor = ["\"Red\"", "\"Green\"", "\"White\"", "\"Black\""];
function arrayToString (Array){
    var arrString = Array.join(", ");
    console.log(arrString);
}


//JavaSript Strings
//Ex 1
var num = 32443;

function reverseNum(num) {
  var newNum = num.toString().split("").reverse().join("");
  console.log(newNum);
}
//Ex 2
var palabra = "webmaster";
function alphabeticalOrder(palabra) {
  var ordered = palabra.split("").sort().join("");
  console.log(ordered);
}
//Ex 3
var str = "prince of persia";

function capitalise(str) {
  var separated = str.split(" ");
  for (var i = 0; i < separated.length; i++) {
    separated[i] = separated[i].charAt(0).toUpperCase() + separated[i].substring(1);
  }
  var uppercase = separated.join(" ");
  console.log(uppercase);
}
/*split convierte a array al string.
el for indica que cada palabra -ocupa una posicion cada una- el caracter en la pos 0 e mayuscula y el resto -.substring(1)- en minuscula
join(" ") los une con un espacio*/

//Ex 4
var text = "Web Development Tutorial";

function longestWord(text) {
    var str = text.split(" ");
    var longest = 0;
    var word;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    console.log(word);
}
