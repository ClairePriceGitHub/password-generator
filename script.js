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
  // var promptQuestions = [
  //   prompt("How many characters does your password have?")];
  // var promptAnswers = [0];
  
  // // For prompt to check input values and replace in promptAnswers array
  // var numCharInput = 0;
  // for (var i=0; i < promptQuestions.length; i++) {
  //   // if (promptQuestions[i] < 8 || promptQuestions[i] > 128) {
  //   //   alert("Please enter a number between 8 and 128");
  //   //   getPasswordOptions();
  //   //   break;
  //   // } else {
  //     numCharInput += promptQuestions[i];
  //     promptAnswers.splice(i, 1, numCharInput);
  //   //}
  // }





  var promptAnswers = [];
  var numCharInput = 0;
  var promptTestInput = function() {
    var promptQuestions = prompt("How many characters does your password have?");
    if (promptQuestions < 8 || promptQuestions > 128) {
      alert("Please enter a number between 8 and 128");
      promptTest();
    } else {
      numCharInput += promptQuestions;
      promptAnswers.push(numCharInput);
    }
  }
  promptTestInput();



  // if (promptQuestions < 8 || promptQuestions > 128) {
  //   alert("Please enter a number between 8 and 128");
  //   prompt("How many characters does your password have?");
  // } 
  // numCharInput += promptQuestions;
  // promptAnswers.push(numCharInput);
  
  














  var confirmQuestions = [
    confirm("does your password have special characters?"),
    confirm("does your password have numeric characters?"),
    confirm("does your password have uppercase characters?")];
  var confirmAnswers = [false, false, false];
  // For confirm questions: to change false to true following input
  for (var i=0; i < confirmQuestions.length; i++) {
    for (var j=0; j < confirmAnswers.length; j++) {
    if (confirmQuestions[i] == true) {
      confirmAnswers.splice(i, 1, true);
      }
    }
  }
  // One array with all answers
  var inputAnswers = promptAnswers.concat(confirmAnswers);
  return(inputAnswers);
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
  var promptOutput = output.slice(1);
  // Convert password length prompt from string to number
  var confirmOutput = (output[0]) * 1;
  var arraySelection = [];
  var password = [];
  // Use input to combine which arrays are to be randomly selected from
  // password.push to ensure at least one character from each array used
  if (promptOutput[0] === true) {
    arraySelection.push(specialCharacters);
    password.push(getRandom(specialCharacters));
  }  
  if (promptOutput[1] === true) {
    arraySelection.push(numericCharacters);
    password.push(getRandom(numericCharacters));
  }
  if (promptOutput[2] === true) {
    arraySelection.push(upperCasedCharacters);
    password.push(getRandom(upperCasedCharacters));
  }
  arraySelection.push(lowerCasedCharacters);
  password.push(getRandom(lowerCasedCharacters));

  // Combine selected arrays into one array rather than nested
  var flatArraySelection = arraySelection.flat();

  var confirmOutputLength = 0;
  if (arraySelection.length === 4) {
    confirmOutputLength = confirmOutput - 4;
  } else if (arraySelection.length === 3) {
    confirmOutputLength = confirmOutput - 3;
  } else if (arraySelection.length === 2) {
    confirmOutputLength = confirmOutput - 2;
  } else {
    confirmOutputLength = confirmOutput - 1;
  }

  for (var i=0; i < confirmOutputLength; i++) {
    password.push(getRandom(flatArraySelection));
  }

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
