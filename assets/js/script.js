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

  //Variable created to concate confirmed characters
  var passwordArray= []

  //Empty string variable created for final array/password to be displayed
  var generatedPassword = ""
  
  var length = parseInt(window.prompt("How many characters would you like your password to contain (must be between 8-128)?"))
  console.log("User chose " + length + " characters.");
  if (length < 8 || length > 128) {
    alert("Password must be between 8-128 characters!");
    // return stops function and sends back to beginning
    // without return, the function will repeat until the 
    // bad input (number outside of parameter) is established 
    return generatePassword();
  }

  var symbolsConfirm = window.confirm("Click OK to use symbols?")
  if (symbolsConfirm){
    // add symbols into the combined array
    passwordArray = passwordArray.concat(symbols)
    console.log("User confirmed symbols.")
  };

  var upperConfirm = window.confirm("Click OK to use uppercase letters?")
  if (upperConfirm){
    // add upper case into the combined array
    passwordArray=passwordArray.concat(upperCase)
    console.log("User confirmed Uppercase letters.")
  };

  var lowerConfirm =window.confirm("Click OK to use lowercase letters?")
  if (lowerConfirm){
    // add lower case into the combined array
    passwordArray = passwordArray.concat(lowerCase)
    console.log("User confirmed Lowercase letters.")
  };

  var numbersConfirm = window.confirm("Click OK to use numbers?")
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
    console.log("Available confirmed characters for selection " + passwordArray);
  };

  // generate a password from the user parameters above
  for (var i = 0; i < length; i++) {
    // code to generate password character by character
    // linking variable to random loop
    var randomIndex =  Math.floor(Math.random() * passwordArray.length);
    // Linking previously created empty string variable to newly created
    // random array
    generatedPassword += passwordArray [randomIndex]
    console.log(generatedPassword);
    };
  // calling final password
    return  generatedPassword;
};


// Write password to the #password input
function writePassword() {
  // link return from generatePassword function to new varible
  var password = generatePassword();
  // create variable for text area object id=password
  var passwordText = document.querySelector("#password");
  // console.dir(passwordText); value is the produced password
  // therefore set the passwordText value to equal password
  passwordText.value = password;
};


