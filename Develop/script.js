// characters taken from - https://www.rapidtables.com/code/text/ascii-table.html

// my code - setting info
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
  var characters = confirm ("1. Welcome to your password Generator\n" +
                              
                          "Want to creat a password? Great, make sure all passwords contain at least 1 symbol, 1 number, 1 uppercase letter and 1 lowercase letter. Please select the amont of characters you would like to use");


  if ((characters < 8)||(characters > 128)) {

      alert("FAILED - Passwords are required to be between 8 and 128 characters long. Try again?")
      return;
          }
  
  var hasUpper = confirm ("click to include uppercase")
  var hasLower= confirm ("click to include lowercase")
  var hasNumber = confirm ("click to include numbercase")
  var hasSpecial = confirm ("click to include specialcase")
  
  if (hasUpper === false && hasLower === false && hasNumber === false  && hasSpecial || false )) {
    alert = ("please choose one of these options")
    return}

var passwordchoice = {

  haslength: haslength;
  hasupper: hasupper;
  haslower: haslower;
  hasnumber: hasnumber;
  hasSpecial: hasSpecial};

}
return: passwordchoice

}

// establishing
function pickRandomElementFromArray (randomArray) {
  var randomIndex = Math.floor(Math.random() * randomArray.length);
  return randomArray[randomIndex];
}

// invoking
function generatepassword (){
  var choice = writepass()
  ()

  if (choice.hasupper){
    upper .concat (upper)
    number .concat (upper)
    special .concat (upper)
    lower  ... push (pickRandomElementFromArray(upper))
 
  }

  if (choice.haslower){
    upper.concat (lower)
    number .concat (lower)
    special .concat (lower)
    lower  ... push (pickRandomElementFromArray(lower))
 
  }
  if (choice.hasnumber){
    upper .concat (number)
    number .concat (number)
    special .concat (number)
    lower  ... push (pickRandomElementFromArray(number))
 
  }

  if (choice.hasSpecial){
    upper.concat (Special)
    number .concat (Special)
    special .concat (Special)
    lower  ... push (pickRandomElementFromArray(Special))
 
  }

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // 

var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;

