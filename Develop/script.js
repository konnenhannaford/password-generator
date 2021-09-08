// characters taken from - https://www.rapidtables.com/code/text/ascii-table.html

// my code - setting info
var lower, upper, special, numbers, characters, prompt 
var lower = ["a", "b", "c", "d", "e", "f","g","h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F","G","H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", '"', "#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var characters = (x < 8) (x > 128);
var prompt  = false

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var characters = prompt("1. Welcome to your password Generator\n" +
                              
                          "Want to creat a password? Great, make sure all passwords contain at least 1 symbol, 1 number, 1 uppercase letter and 1 lowercase letter. Please select the amont of characters you would like to use");


  if ((characters < 8)||(characters > 128)) {

      characters = true ("FAILED - Passwords are required to be between 8 and 128 characters long. Try again?");
        
      else if characters = false ("Ok thats great.);
    }
    
  lower =     prompt ("2.  Lower case\n" +
                      "Password requires lower case letters. Please select at least 1 of these options.\n" +);


  upper =     prompt ("2.  Upper case\n" +
                      "Password requires upper case letters. Please select at least 1 of these options.\n" +);
  
  
  numbers =     prompt ("2.  Numbers\n" +
                      "Password requires numbers. Please select at least 1 of these options.\n" +);


  characters =   prompt ("2.  Upper case\n" +
                        "Password requires upper case letters. Please select at least 1 of these options.\n" +);
  

  if ((lower false || upper false  || number false  || characters || false )) {
    

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// // 

// // this is from the tute on friday
// function pickRandomElementFromArray (randomArray) {
//   var randomIndex = Math.floor(Math.random() * randomArray.length);
//   return randomArray[randomIndex];
// }
// // this is from the tute on friday





// // from another
  // for(var i=0; i < lower.length; i++) {
  //   // This statement will run each time the loop is executed
  //   console.log("you havent satisfied criteria, please choose another option, " + students[i] + "!");
  // }
// // from another




