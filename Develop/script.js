// characters taken from - https://www.rapidtables.com/code/text/ascii-table.html

// my code - setting info
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", '"', "#", "$", "%", "&", "’", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var characters = window.prompt ("1. Welcome to your password Generator.\n Want to create a password? \n Great, make sure all passwords contain at least \n 1 symbol \n 1 number \n 1 uppercase letter \n 1 lowercase letter \n Please select the amont of characters you would like to use")
  if ((characters < 8) || (characters > 128)) {

    alert("FAILED - Passwords are required to be between 8 and 128 characters long. Try again?")
    return;
  }

  var hasUpper = confirm("click to include uppercase")
  var hasLower = confirm("click to include lowercase")
  var hasNumber = confirm("click to include a number")
  var hasSpecial = confirm("click to include a special character")

  if (hasUpper === false || hasLower === false || hasNumber === false || hasSpecial === false) {
    alert ("please choose one of these options")
    return
  }

  var passwordchoice = {

    length: parseInt(characters), 
    // parseint?
    
    hasupper: hasUpper,
    haslower: hasLower,
    hasnumber: hasNumber,
    hasSpecial: hasSpecial
  };

  return passwordchoice

}

// establishing
function pickRandomElementFromArray(randomArray) {
  var randomIndex = Math.floor(Math.random() * randomArray.length-1);
  return randomArray[randomIndex];
}

// invoking - see contact issue
function generatepassword() {
  var choice = writePassword()
  var abc = []

  if (choice.hasupper) {
    abc.push(...upper)
  }
  if (choice.haslower) {
    abc.push(...lower)
    }
  if (choice.hasnumber) {
    abc.push(...numbers)
  }
  if (choice.hasSpecial) {
    abc.push(...special)
  }

  var password = ""

  for(var i = 0; i < choice.length; i++) {
// var password = generatePassword();
password=password+pickRandomElementFromArray (abc)}
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatepassword);


