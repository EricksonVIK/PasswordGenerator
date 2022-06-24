// create a listener event
var generateBtn = document.querySelector("#generate");
// generateBtn.addEventListener("click", generatePassword);
generateBtn.addEventListener("click", writePassword);

// Get references to the #generate element
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
  
  // var generatePassword = "This is the text for a generated password"
  var length = parseInt(window.prompt("How many characters would you like your password to contain (must be between 8-128)?"))
  console.log("User chose " + length + " characters.");
  if (length < 8 || length > 128) {
    alert("Password must be between 8-128 characters!")
    generatePassword();
  };

  var symbolsConfirm = window.confirm("Would you like to use symbols?")
  if (symbolsConfirm){
    // add symbols into the combined array
    passwordArray = passwordArray.concat(symbols)
    console.log("User confirmed symbols.")
  };

  var upperConfirm = window.confirm("Would you like to use uppercase letters?")
  if (upperConfirm){
    // add upper case into the combined array
    passwordArray=passwordArray.concat(upperCase)
    console.log("User confirmed Uppercase letters.")
  };

  var lowerConfirm =window.confirm("Would you like to use lowercase letters?")
  if (lowerConfirm){
    // add lower case into the combined array
    passwordArray = passwordArray.concat(lowerCase)
    console.log("User confirmed Lowercase letters.")
  };

  var numbersConfirm = window.confirm("Would you like to use numbers?")
  if (numbersConfirm){
    // add numbers into the combined array
    passwordArray = passwordArray.concat(numbers)
    console.log("User confirmed numbers.")
  };
    
  if (passwordArray.length === 0) {
    alert("You must enter at least one value.")
    generatePassword();
  }else{
    // confirm the character arrays were added to passwordArray
    console.log(passwordArray)
  };

  // generate a password from the user parameters above

  
  for (var i = 0; i < length; i++) {
    // code to generate password character by character
    // use a random number Math.floor(Math.random() * passwordArray.length) and
    console.log(i);

    var randomIndex =  Math.floor(Math.random() * passwordArray.length);



      
      // add the character at that number to the generatedPassword
    generatedPassword += passwordArray [randomIndex]

      
    };
  // document.querySelector("#password").innerHTML += passwordArray
  return  generatedPassword
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// generateBtn.addEventListener("click", writePassword);

