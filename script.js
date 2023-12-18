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


// --------------------------------------------------------------------
// Function to prompt user for password options
function getPasswordOptions() {
  var promptAnswers = [];
  // Function to test inputed prompt value and push to array
  var promptTestInput = function() {
    var promptQuestions = prompt("How many characters would you like your password to have?\n(Please enter a number between 8 and 128)");
    if (promptQuestions < 8 || promptQuestions > 128) {
      alert("Error:  Please enter a number between 8 and 128");
      promptTestInput();
    } else if (isNaN(promptQuestions * 1)) {
      alert("Error:  Please enter a numeric value\n(example 12)");
      promptTestInput();
    } else {
      promptAnswers.push(promptQuestions);
    }
  }
  promptTestInput();
  // confirmQuestions in an array
  var confirmQuestions = [
    confirm("Does your password have special characters?"),
    confirm("Does your password have numeric characters?"),
    confirm("Does your password have uppercase characters?")];
  // confirmAnswers[0] evaluates lowercase characters always true, initiate other answers
  var confirmAnswers = [true, false, false, false];
  // For confirm questions to change false to true as per input
  for (var i=0; i < confirmQuestions.length; i++) {
    for (var j=1; j < confirmAnswers.length; j++) {
    if (confirmQuestions[i] == true) {
      confirmAnswers.splice(i+1, 1, true);
      }
    }
  }
  // Return one array with all input answers
  var inputAnswers = promptAnswers.concat(confirmAnswers);
  return inputAnswers;
}

// --------------------------------------------------------------------
// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// --------------------------------------------------------------------
// Function to generate password with user input
function generatePassword() {
  var output = getPasswordOptions();
  // Create array with confirm outputs only
  var confirmOutput = output.slice(1);
  // Convert password length prompt from string to number
  var promptOutput = (output[0]) * 1;
  var arrayOptions = [lowerCasedCharacters, specialCharacters, numericCharacters, upperCasedCharacters];
  var arraySelection = [];
  var password = [];
  // Loop over true/false values and push corresponding character arrays to arraySelection
  // password.push to ensure at least one character from selected arrays included in password
  for (var i=0; i < confirmOutput.length; i++)
  if (confirmOutput[i]) {
    arraySelection.push(arrayOptions[i]);
    password.push(getRandom(arrayOptions[i]));
  }
  // Combine selected arrays into one array rather than nested, to then do random selection
  var flatArraySelection = arraySelection.flat();
  // Evaluate N (number of characters) left to add to password from prompt
  // (after ensuring at least one from each selected array has been added)
  var promptOutputLength = promptOutput - arraySelection.length;
  // Push random password character N times to password
  for (var i=0; i < promptOutputLength; i++) {
    password.push(getRandom(flatArraySelection));
  }
  // Password array to string without commas
  return password.toString().replace(/,/g,"");
}

// --------------------------------------------------------------------
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
