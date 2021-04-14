var choice = prompt("Scegli pari o dispari: ");
var numPlayer  = parseInt(prompt("Scegli un numero da 1 a 5"));
var numComputer = numberGenerator();


if(numPlayer > 5 || numPlayer < 1 ){
  alert("Il numero inserito non è valido!");
}
if(choice != "pari" && choice != "dispari"){
  alert("Scegli pari o dispari!");
}

console.log(numPlayer);
console.log(numComputer);

var sum = numPlayer + numComputer;


if(isEven(sum)){
  console.log("The sum is even")
}else{
  console.log("The sum is odd")
}

if(isEven(sum) && choice == "pari"){
  console.log("Hai vinto!");
}else if(!isEven(sum) && choice == "dispari"){
  console.log("Hai vinto!")
}else{
  console.log("Hai perso!");
}

/* functions */
function numberGenerator(){
  var randomNumber = Math.ceil(Math.random()* 5);
  return randomNumber;
}

function isEven(number){
  if(number%2){
    return false;
  }else{
    return true;
  }
}