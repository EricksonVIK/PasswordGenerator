// Assignment code here


// Get references to the #generate element
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

function generatePassword() {
//   do password generating things

  var passwordArray= []
  var generatedPassword = ""
  
  var generatePassword = "This is the text for a generated password"
    var length = parseInt(window.prompt("How many characters would you like your password to contain?"))
    console.log("User selected " + length);
    if (length < 8 || length > 128) {
      alert("Password must be between 8-128 characters!")
      generatePassword();
    }

    var symbolsConfirm = window.confirm("Would you like to use symbols?")
    if (symbolsConfirm){
      // add symbols into the combined array
      passwordArray = passwordArray.concat(symbols)
    }

    var upperConfirm = window.confirm("Would you like to use uppercase letters?")
    if (upperConfirm){
      // add upper case into the combined array
      passwordArray=passwordArray.concat(upperCase)
    }

    var lowerConfirm =window.confirm("Would you like to use lowercase letters?")
    if (lowerConfirm){
      // add lower case into the combined array
      passwordArray = passwordArray.concat(lowerCase)
    }

    var numbersConfirm = window.confirm("Would you like to use numbers?")
    if (numbersConfirm){
      // add numbers into the combined array
      passwordArray = passwordArray.concat(numbers)
    }
    
    if (passwordArray.length === 0) {
      alert("You must enter at least one value.")
      generatePassword();
    }

    // generate a password from the user parameters above
    for (var i = 0; i < length; i++) {
      // code to generate password character by character
      // use a random number Math.floor(Math.random() * passwordArray.length) and
      return Math.floor(Math.random() * passwordArray)
      
      // add the character at that number to the generatedPassword
      // generatedPassword += passwordArray[random number]
      
    }

  // return  generatedPassword
}

generatePassword();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  generateBtn.addEventListener("click", password);
}


// generateBtn.addEventListener("click", writePassword);

