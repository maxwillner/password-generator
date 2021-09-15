// Assignment code here
var numberOfCharacters;
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K","L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numericValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var availableCharacters = [];
var password = [];


var passwordInput;
var createPassword;
var index;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Add event listener to generate button
generateBtn.addEventListener("click", function() {
  
  debugger;
  alert("Generate Your Password Now!");
  generatePassword();
});

// addArray(uppercaseLetters, lowercaseLetters, specialCharacters, numericValues);
// console.log(availableCharacters)

// User Inputs
function getUserInputs() {
  // Determine how many characters user wants to use
  numberOfCharacters = prompt("How many characters do you want in your password? Please choose between 8 and 128 characters.")
  if (isNaN(numberOfCharacters)) {
    alert("Please enter a number!");
    getUserInputs();
  };
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Please choose between 8 and 128 characters.");
    getUserInputs();
  }; 
};



// Generate Password
function passwordInput() {
  // Confirm if user wants uppercase characters
  var uppercaseConfirm = confirm("Do you want to include uppercase letters in your password?");
  if (uppercaseConfirm) {
    availableCharacters.push(...uppercaseLetters);
    alert("You have chosen to include uppercase letters in your password.");
  }
  else {
    alert("You have chosen to exclude uppercase letters in your password!");
  };

  // Confirm if user wants lowercase characters
  var lowercaseConfirm = confirm("Do you want to include lowercase letters in your password?");
  if (lowercaseConfirm) {
    availableCharacters.push(...lowercaseLetters);
    alert("You have chosen to include lowercase letters in your password.");
  } else {
    alert("You have chosen to exclude lowercase letters in your password!");
  }

  // Confirm if user wants special charaters 
  var specialCharacterConfirm = confirm("Do you want to include special characters in your password?")
  if (specialCharacterConfirm) {
    availableCharacters.push(...specialCharacters);
    alert("You have chosen to include special characters in your password.");
  } else {
    alert("You have chosen to exclude special characters in your password!")
  }

  // Confirm if user wants numeric values
  var numericConfirm =  confirm("Do you want to include numeric values in your password?")
  if (numericConfirm) {
    availableCharacters.push(...numericValues);
    alert("You have chosen to include numbers in your password.");
  } else {
    alert("You have chosen to exclude special characters in your password!")
  }; 

  if (uppercaseConfirm === false && lowercaseConfirm === false && specialCharacterConfirm === false && numericConfirm === false) {
    alert("Error! You must choose at least one set of characters for your password!")
    passwordInput();
  }

  // now have mixture of uppercase, lowercase, specialcharacters, and numericvalues within 'availablecharacters' variable -- 10 - 72 characters
  // console.log(availableCharacters);
};

// create password values by looping over 'availablecharacter' array for the 'numberOfCharacters' chosen
function createPasswordValues() {
  for (var i = 0; i < numberOfCharacters; i++) {
    var randomCharacter = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
    
    password.push(randomCharacter);
  };

  alert("Your new password is " + password.join(""));
};

function generatePassword() {  
  getUserInputs();
  passwordInput();
  createPasswordValues();
};


