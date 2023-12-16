// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


/*
// Function to prompt user for password options
function getPasswordOptions() {

}


// Function for getting a random element from an array
function getRandom(arr) {
  
}


// Function to generate password with user input
function generatePassword() {
 
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

*/




// var passwordLength = 0;

// // Function to prompt user for password options
// function getPasswordOptions() {
//   var numOfChar = prompt("How many characters does your password have?");
//   if (numOfChar < 8 || numOfChar > 128) {
//     alert("Please enter a number between 8 and 128");
//   } else if (numOfChar === !typeof number) {
//     alert('Please enter a numeric value');
//   } else {
//     passwordLength += numOfChar;
//   }

//   var specChar = alert("does your password have special characters?");
//   if (specChar) {
//     password = 
//   }

//   var numericChar = alert("does your password have numeric characters?");
//   var upperChar = alert("does your password have uppercase characters?");
// }

// Function to prompt user for password options
function getPasswordOptions() {
  // var passwordOptions = [];

  
  // var numCharInput = 0;
  // var numChar = ;
  
  // if (numChar < 8 || numChar > 128) {
  //   alert("Please enter a number between 8 and 128");
  //   getPasswordOptions();
  // } else if (numChar == typeof num) {
  //   alert("Please enter a numeric value");
  //   getPasswordOptions();
  // } else {
  //   numCharInput += numChar;
  // }
  
  

  var inputQuestions = [
    prompt("How many characters does your password have?"),
    confirm("does your password have special characters?"),
    confirm("does your password have numeric characters?"),
    confirm("does your password have uppercase characters?")];
  var inputAnswers = [0, false, false, false];
  
  
    for (var i=1; i < inputQuestions.length; i++) {
      for (var j=1; j < inputAnswers.length; j++) {
      if (inputQuestions[i] == true) {
        inputAnswers.splice(i, 1, true);
        }
      }
    }
    
 // questionsAndAnswers.push(inputAnswers);
  console.log(inputAnswers);
  }

getPasswordOptions();

// // Function for getting a random element from an array
// function getRandom(arr) {
//   var randomIndex = Math.floor(Math.random() * arr.length);
//   var randomElement = arr[randomIndex];
//   return randomElement;
// }


// // Function to generate password with user input
// function generatePassword() {
//  getRandom(arr)
// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');
//  // document.getElementById("password").value = password; // associate the password with the input box?
//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);
