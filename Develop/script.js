// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // ask the user what password criteria they have
  var confirmLength = window.confirm("Would you like your password to be LONGER than 8 characters?");
  // if yes, they do want more than 8 characters in their password
  if (confirmLength) {
    console.log("yes, more than 8 characters");
  }
  
  // Confim character types in the password
  var confirmCharTypesSpec = window.confirm("Do you want special characters in your password? I.e *, %, $, etc.");
  var confirmCharTypesNum = window.confirm("Do you want numbers in your password?");
  var confirmCharTypesUp = window.confirm("Do you want uppercase letters in your password?");
  var confirmCharTypeLow = window.confirm("Do you want lowercasse numbers in your password?");

  // alert if the user didn't pick any character types OR if they picked at least 1, show them their final preferences
  if (!confirmCharTypesSpec && !confirmCharTypesNum && !confirmCharTypesUp && !confirmCharTypeLow) {
    window.alert("You must select at least one character type (special characters, numbers, upper or lower case)! Please try again.");
    return writePassword();
  }
  else {
    window.alert("Your selected password criteria is: \n 1. More than 8 characters long? " + confirmLength + 
    "\n 2. Special Characters?: " + confirmCharTypesSpec +
    "\n 3. Numbers?: " + confirmCharTypesNum + 
    "\n 4. Uppercase letters?: " + confirmCharTypesUp +
    "\n 5. Lowercase letters?: " + confirmCharTypeLow);
  }

  // generate the random password based on above criteria
  generatePassword();
  function generatePassword () {
    // define the different characters possible
    var passwordLength = '';
    var specialChar = "!@#$%^&*()";
    var numbers = "0123456789";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";

    // generate length of password between either 1-8 characters or 8-128 characters
    if (confirmLength) {
      passwordLength = Math.floor(Math.random() * (128 - 8) + 8);
      console.log(length);
    }
    else {
      passwordLength = Math.floor(Math.random() * 9) + 1;
      console.log(length);
    };

    // create a new variable with all possible character types, based on what was selected in ealier prompts
    // I.E. if user wants all types, then all characters as defined above are available to be used
    var charCodes = '';
    if (confirmCharTypesSpec) charCodes = charCodes.concat(specialChar);
    if (confirmCharTypesNum) charCodes = charCodes.concat(numbers);
    if (confirmCharTypesUp) charCodes = charCodes.concat(upperCase);
    if (confirmCharTypeLow) charCodes = charCodes.concat(lowerCase);

    for (var i = 0; i <= passwordLength; i++) {
      var pwCode = charCodes[Math.floor(Math.random() * charCodes.length)];
      password = charCodes.toString(pwCode, pwCode +1);
    }

    document.getElementById("password").value = password;
    console.log(password);
  };




  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
