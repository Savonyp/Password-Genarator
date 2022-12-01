var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
'y', 'z'
];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ['`', '!', '@', '#', '$', '%', '^', '&', '*', '<3', '/',];
/* array lists */

// Assignment Code
var generateBtn = document.querySelector("#generate");

/* When the user clicks on the generate button, shows message box */
function getPasswordCriteria() {
  var userChoseLetters = confirm("Do you want letters?");
  var userChoseNumbers = confirm("Do you want numbers?");
  var userChosespecialCharacters = confirm("Do you want special characters?");
  /* added confirm for user */
  var options = {
    userChoseNumbers: userChoseNumbers
  };
  return options;
}
/* confirmLetters && confirmNumbers && confirmSpecialCharacters */

 function createRandom(length) {
  var random = Math.floor(Math.random() * length);
  return random;
}
/* why does random work but not when i do shuffle */

function generatePassword() {
  var userChose = getPasswordCriteria();
  var availableChars = [15];
  var passwordArr = [];
  if(userChose.userChoseNumbers) {
    availableChars = availableChars.concat(numbers);
  }
  if(userChose.userChoseLetters) {
    availableChars = availableChars.concat(letters); 
  }
  if(userChose.userChosespecialCharacters) {
    availableChars = availableChars.concat(specialCharacters);
  }

  for(var i = 0; i < 9; i++) {
    passwordArr.push(availableChars[createRandom(availableChars.length)])
  }

return passwordArr.join("")
}
/*still cant figure out why it only generates numbers. struggled with it only generating 4 numbers a time*/


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 