// characters taken from - https://www.rapidtables.com/code/text/ascii-table.html

// my code - setting info
var lower, upper, special, numbers
var lower = ["a", "b", "c", "d", "e", "f","g","h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F","G","H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "”", "#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// this is from the tute on friday
function pickRandomElementFromArray (randomArray) {
  var randomIndex = Math.floor(Math.random() * randomArray.length);
  return randomArray[randomIndex];
}
// this is from the tute on friday





// from another
for(var i=0; i < students.length; i++) {
  // This statement will run each time the loop is executed
  console.log("Great to see you, " + students[i] + "!");
}
// from another




