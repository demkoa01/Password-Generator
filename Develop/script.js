// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //            var password = generatePassword();
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

  if (!confirmCharTypesSpec && !confirmCharTypesNum && !confirmCharTypesUp && !confirmCharTypeLow) {
    window.alert("You must select at least one character type (special characters, numbers, upper or lower case)! Please try again.");
    return writePassword();
  }
  else {
    window.alert("Your selected password criteria is: 1. More than 8 characters long? " + confirmLength + 
    " 2. Special Characters?: " + confirmCharTypesSpec +
    " 3. Numbers?: " + confirmCharTypesNum + 
    " 4. Uppercase letters?: " + confirmCharTypesUp +
    " 5. Lowercase letters?: " + confirmCharTypeLow);
  }






  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
