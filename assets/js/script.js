// Assignment code here
var numberOfCharacters;
var uppercaseConfirm;
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseConfirm;
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialCharacterConfirm;
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var numericConfirm;
var numericValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var passwordInput;
var createPassword;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Add event listener to generate button
generateBtn.addEventListener("click", function() {
  
  // debugger;
  alert("Generate Your Password Now!");
  getUserInputs()
  passwordInput()
  generatePassword()
});

// User Inputs
function getUserInputs() {

  // Determine how many characters user wants to use
  var numberOfCharacters =
  prompt("How many characters do you want in your password? Please choose between 8 and 128 characters.")
  if (isNaN(numberOfCharacters)) {
    alert("Please enter a number!")
  }
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Please choose between 8 and 128 characters.");
    getUserInputs()
  } 
}


// Generate Password
function passwordInput() {
  // Confirm if user wants uppercase characters
  var uppercaseConfirm =
  prompt("Do you want to include uppercase letters in your password?")
  if (uppercaseConfirm === "yes") {
    passwordInput = uppercaseLetters
  }
  else {
    alert("You have chosen to exclude uppercase letters in your password!")
  };

  // Confirm if user wants lowercase characters
  var lowercaseConfirm =
  prompt("Do you want to include lowercase letters in your password?")
  if (uppercaseConfirm === "yes" && lowercaseConfirm === "yes") {
    passwordInput = uppercaseLetters.concat(lowercaseLetters)
  } else if (uppercaseConfirm === "no" && lowercaseConfirm === "yes") {
    passwordInput = lowercaseLetters
  }
  else {
    alert("You have chosen to exclude lowercase letters in your password!")
  }

  // Confirm if user wants special charaters 
  var specialCharacterConfirm = 
  prompt("Do you want to include special characters in your password?")
  if (uppercaseConfirm === "yes" && lowercaseConfirm === "yes" && specialCharacterConfirm === "yes") {
    passwordInput = uppercaseLetters.concat(lowercaseLetters).concat(specialCharacters);
  }
  else if (uppercaseConfirm === "yes" && lowercaseConfirm === "no" && specialCharacterConfirm === "yes") {
    passwordInput = uppercaseLetters.concat(specialCharacters);
  }
  else if (uppercaseConfirm === "no" && lowercaseConfirm === "yes" && specialCharacterConfirm === "yes") {
    passwordInput = lowercaseLetters.concat(specialCharacters);
  }
  else if (uppercaseConfirm === "no" && lowercaseConfirm === "no" && specialCharacterConfirm === "yes") {
    passwordInput = specialCharacters;
  }
  //else if (uppercaseConfirm === "yes" && lowercaseConfirm === "yes" && special)
  else {
    alert("You have chosen to exclude special characters in your password!")
  }

  // Confirm if user wants numeric values
  var numericConfirm =
  prompt("Do you want to include numeric values in your password?")
  if (uppercaseConfirm === "yes" && lowercaseConfirm === "yes" && specialCharacterConfirm === "yes" && numericConfirm === "yes") {
    passwordInput = uppercaseLetters.concat(lowercaseLetters).concat(specialCharacters).concat(numericValues);
  }
  else if (uppercaseConfirm === "yes" && lowercaseConfirm === "yes" && specialCharacterConfirm === "no" && numericConfirm === "yes") {
    passwordInput = uppercaseLetters.concat(lowercaseLetters).concat(numericValues);
  }
  else if (uppercaseConfirm === "yes" && lowercaseConfirm === "no" && specialCharacterConfirm === "yes" && numericConfirm === "yes") {
    passwordInput = uppercaseLetters.concat(specialCharacters).concat(numericValues);
  }
  else if (uppercaseConfirm === "no" && lowercaseConfirm === "yes" && specialCharacterConfirm === "yes" && numericConfirm === "yes") {
    passwordInput = lowercaseLetters.concat(specialCharacters).concat(numericValues);
  }
  else if (uppercaseConfirm == "yes" && lowercaseConfirm === "yes" && specialCharacterConfirm === "yes" && numericConfirm === "no") {
    alert("You have chosen to exclude numeric values in your password!")
    passwordInput = uppercaseLetters.concat(lowercaseLetters).concat(specialCharacters);
  }
  else if (uppercaseConfirm === "yes" && lowercaseConfirm === "no" && specialCharacterConfirm === "no" && numericConfirm === "yes") {
    passwordInput = uppercaseLetters.concat(numericValues);
  }
  else if (uppercaseConfirm === "no" && lowercaseConfirm === "yes" && specialCharacterConfirm === "no" && numericConfirm === "yes") {
    passwordInput = lowercaseLetters.concat(numericValues);
  }
  else if (uppercaseConfirm === "no" && lowercaseConfirm === "no" && specialCharacterConfirm === "yes" && numericConfirm === "yes") {
    passwordInput = specialCharacters.concat(numericValues);
  }
  else if (uppercaseConfirm === "no" && lowercaseConfirm === "no" && specialCharacterConfirm === "no" && numericConfirm === "yes") {
    passwordInput = numericValues;
  }
  else {
    alert("You have chosen to exclude special characters in your password!")
  }

};
// // currently stuck!

function generatePassword() {}
//   var createPassword = [Math.floor(Math.random() * passwordInput.length)]
//   console.log(createPassword);

//   for (var i = 0; i < numberOfCharacters; i++) {
//     console.log(createPassword[i]);
  

//   };


// end stuckness


// conditionals -- if yes push into array, if not just don't push
// Array.concat
// Math.random * number of characters chosen from Array
// loop for number of times chose for # of characters
// show final product
// ensure all characters 


//passwordInput()




// function init() {
//   getUserInput()
//   passwordInput()
//   renderPassword()
// 





// Write password to the #password input
// function passwordInput() {}
//   var password = passwordInput();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
//generateBtn.addEventListener("click", passwordInput);
// var characterLength = function() {
//   var character = "";

//   console.log("You have chosen" + character + "characters for your password");
