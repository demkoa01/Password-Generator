// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //            var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // ask the user what password criteria they have
  var confirmNumberChar = window.confirm("Would you like your password to be LONGER than 8 characters?");
  var confirmSpecialChar = window.confirm("Would you like your password to contain special characters?");
  var confirmNumbers = window.confirm("Would you like your password to contain numbers?");
  var promptUpperLower = window.prompt("Would you like only LOWER case letters, only UPPER case letters, or BOTH in your password? Enter LOWER, UPPER or BOTH.");

  // if yes, they do want more than 8 characters in their password
  if (confirmNumberChar) {
    console.log("yes, more than 8 characters");
  }
  // if yes, they do want special characters in their password
  if (confirmSpecialChar) {
    console.log("yes, special characters");
  }
  // if yes, they do want numbers in their password
  if (confirmNumbers) {
    console.log("yes, include numbers");
  }


  // Lowercase, uppercase or both in password
  if (promptUpperLower === "" || promptUpperLower === null) {
    window.alert("You need to provide a valid answer, try again!");
    return writePassword();
  }
  // convert promptUpperLower input from user to all lowercase
  promptUpperLower = promptUpperLower.toLowerCase();
  if (promptUpperLower === "lower") {
    console.log("only lowercase");
  }
  else if (promptUpperLower === "upper") {
    console.log("only uppercase");
  }
  else if (promptUpperLower === "both") {
    console.log("both upper and lower case");
  }
 
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
