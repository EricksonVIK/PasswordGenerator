// Assignment code here
// how do i ceate a string of variable with numbers, characters, and lower/upper case letters?


// Get references to the #generate element
// Variable created to create the password to display?
// code from HTML  -- button id="generate" class="btn">Generate Password</button --
// generat password function to generate

var generateBtn = document.querySelector("#generate");

var symbols = ["`", "~", "!", "@", "#", "$","%", "^", "&", "*", "(", ")", "_", "-", "=", "+", "{", "}", "|", ":", ";", "'","<",">","?",]
  console.log(symbols.length + " -- " + symbols)

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O", "P","Q","R","S","T","U","V","W","X","Y","Z"]  
  console.log(upperCase.length + " -- " + upperCase)

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  console.log(lowerCase.length + " -- " + lowerCase)

var numbers = ["1","2","3","4","5","6","7","8","9","0"]
  console.log(numbers.length + " -- " + numbers)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();{
    // addressing length of password
    var length = window.prompt("How many characters would you like your password to contain?")
    console.log(length);
    if (length < 8 || length > 128) {
      alert("Password must be between 8-128 characters!")
      return generatePassword();
    }
    var symbolsConfirm = window.confirm("Would you like to use symbols?")
    if (symbolsConfirm){
      // add symbols into the combined array
    }else{

    }

    var upperConfirm = window.confirm("Would you like to use uppercase letters?")
    if (upperConfirm){
      // add upper case into the combined array
    }else{

    }

    var lowerConfirm =window.confirm("Would you like to use lowercase letters?")
    if (lowerConfirm){
      // add lower case into the combined array
    }else{

    }

    var numbersConfirm = window.confirm("Would you like to use numbers?")
    if (numbersConfirm){
      // add numbers into the combined array
    }else{

    }
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

