var input = prompt("Insert a word: ");

function checkPalindrome(str){
  inputString = str.split();
  console.log("Questo è l'input " + inputString);
  var output = inputString.reverse().join("");
  console.log("Questo è l'output " + output);
  if (inputString == output){
    console.log(input + " is palindrome");
  }else{
    console.log(input + " is not palindrome");
  }
}

console.log(checkPalindrome(input));