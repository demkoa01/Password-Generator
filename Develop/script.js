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
    console.log("make a PW");

    // generate length of password between 1-128 characters
    if (confirmLength) {
      var length = Math.floor(Math.random() * 129);
      console.log(length);
    }
    else {
      length = Math.floor(Math.random() * 9) + 1;
      console.log(length);
    }

  };




  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
