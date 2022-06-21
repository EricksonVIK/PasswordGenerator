// Assignment code here
// how do i ceate a string of variable with numbers, characters, and lower/upper case letters?


// Get references to the #generate element
// Variable created to create the password to display?
// code from HTML  -- button id="generate" class="btn">Generate Password</button --

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
