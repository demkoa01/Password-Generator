// Assignment code here

// ask the user what password criteria they have
var confirmNumber = window.confirm("Would you like your password to be LONGER than 8 characters?");
var confirmSpecialChar = window.confirm("Would you like your password to contain special characters?");

// if yes, they do want more than 8 characters in their password
if (confirmNumber) {
  console.log("yes, more than 8 characters");
}

// if yes, they do want special characters in their password
if (confirmSpecialChar) {
  console.log("yes, special characters");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
