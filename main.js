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
    if (array[l] < array[l + 1] && least > array[l]) {
      least = array[l];
      l++;
    } else {
      l++;
    }
  }
  console.log(least);
}
//Ex 4
var arrayDos = [62, 69, 32, 3, 25, 95, 356, 1958, 265, 36, 574, 364374, 356, 36, 46, 236, 32, 46, 462, 444, 3002];
var u = 0;
var most = 0;

function numMayor(arrayDos) {
  while (u < arrayDos.length) {
    if (arrayDos[u] > arrayDos[u + 1] && most < arrayDos[u]) {
      most = arrayDos[u];
      u++;
    } else {
      u++;
    }
  }
  console.log(most);
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
        i++;
      } else {
        i++;
      }
    }
  }
  console.log(numRepetidos);
}
//Ex 7
var myColor;
myColor = ["Red", "Green", "White", "Black"];
var colours = [];

function arrayToString(myColors) {
  /*for (var i = 0; i < myColor.length; i++) {
    colours.push(myColor[i]);
  }
  colours.toString();*/
  arrayToString.toString();
  console.log();
}

//JavaSript Strings
//Ex 1
var num = 32443;

function reverseNum(x) {
  var newNum = num.toString().split("").reverse().join("");
  console.log(newNum);
}
//Ex 2
var str = "webmaster";

function alphabeticalOrder(str) {
  var ordered = str.split("").sort().join("");
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
  var textArray = text.split(" ");
  var longestWord = 0;
  for (var i = 0; i < textArray.length; i++) {
    if (textArray[i].length > longestWord) {
      longestWord = textArray.length;
    }
  }
console.log(longestWord);
}

//JavaScript Strings
// Ex 1
var num = 32443;
function reverseNumber(num){
  var reversedNumber;
  num.toString() = reversedNumber;
  console.log(reversedNumber);
}
