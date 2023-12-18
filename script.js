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
  // Function to test inputed prompt values and push to array
  var promptTestInput = function() {
    var promptQuestions = prompt("How many characters would you like your password to have?");
    if (promptQuestions < 8 || promptQuestions > 128) {
      alert("Error:   Please enter a number between 8 and 128");
      promptTestInput();
    } else if (isNaN(promptQuestions * 1)) {
      alert("Error:   Please enter a numeric value (e.g. 12)");
      promptTestInput();
    } else {
      promptAnswers.push(promptQuestions);
    }
  }
  promptTestInput();

  var confirmQuestions = [
    confirm("does your password have special characters?"),
    confirm("does your password have numeric characters?"),
    confirm("does your password have uppercase characters?")];
  var confirmAnswers = [false, false, false];
  // For confirm questions to change false to true as per input
  for (var i=0; i < confirmQuestions.length; i++) {
    for (var j=0; j < confirmAnswers.length; j++) {
    if (confirmQuestions[i] == true) {
      confirmAnswers.splice(i, 1, true);
      }
    }
  }

  // Return one array with all answers
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
  var arraySelection = [];
  var password = [];
  // Use input to combine which arrays are to be randomly selected from
  // password.push to ensure at least one character from each array used
  if (confirmOutput[0] === true) {
    arraySelection.push(specialCharacters);
    password.push(getRandom(specialCharacters));
  }  
  if (confirmOutput[1] === true) {
    arraySelection.push(numericCharacters);
    password.push(getRandom(numericCharacters));
  }
  if (confirmOutput[2] === true) {
    arraySelection.push(upperCasedCharacters);
    password.push(getRandom(upperCasedCharacters));
  }
  arraySelection.push(lowerCasedCharacters);
  password.push(getRandom(lowerCasedCharacters));

  // Combine selected arrays into one array rather than nested, to then do random selection
  var flatArraySelection = arraySelection.flat();

  var confirmOutputLength = 0;
  if (arraySelection.length === 4) {
    confirmOutputLength = promptOutput - 4;
  } else if (arraySelection.length === 3) {
    confirmOutputLength = promptOutput - 3;
  } else if (arraySelection.length === 2) {
    confirmOutputLength = promptOutput - 2;
  } else {
    confirmOutputLength = promptOutput - 1;
  }

  for (var i=0; i < confirmOutputLength; i++) {
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
