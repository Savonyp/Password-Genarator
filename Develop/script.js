// Define arrays for uppercase and lowercase letters, numbers, and special characters
var uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ['`', '!', '@', '#', '$', '%', '^', '&', '*', '<3', '/',];

// Assignment code
var generateBtn = document.querySelector("#generate");

// When the user clicks on the generate button, show message boxes
function getPasswordCriteria() {
  var userChoseLetters = confirm("Do you want letters?");
  var userChoseNumbers = confirm("Do you want numbers?");
  var userChoseSpecialCharacters = confirm("Do you want special characters?");

// Return an object containing the user's choices
var options = {
  userChoseLetters: userChoseLetters,
  userChoseNumbers: userChoseNumbers,
  userChoseSpecialCharacters: userChoseSpecialCharacters };

return options;
}

// Return a random integer between 0 and length-1
function createRandom(length) {
  return Math.floor(Math.random() * length);
}

// Generate a password based on user criteria
function generatePassword() {
  var userChoices = getPasswordCriteria();
  var availableChars = [];
  var passwordArr = [];

if(userChoices.userChoseLetters) {
// If user chose letters, add both uppercase and lowercase letters to availableChars
availableChars = availableChars.concat(uppercaseLetters, lowercaseLetters);
}
if(userChoices.userChoseNumbers) {
availableChars = availableChars.concat(numbers);
}
if(userChoices.userChoseSpecialCharacters) {
availableChars = availableChars.concat(specialCharacters);
}

for(var i = 0; i < 18; i++) {
passwordArr.push(availableChars[createRandom(availableChars.length)]);
}

return passwordArr.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);