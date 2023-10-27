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

// Function to prompt user for password options

// function getPasswordOptions() {
//   var validEntry = false; //variable to be used as condition in while loop

//   //while loop runs as validEntry is false - as long as a number between 8 and 128 is not entered by user
//   while(validEntry == false){ 
//     var passwordLength = prompt('How long would you like your password to be? Enter a number from 8 to 128 (including 8 and 128)');
//     var parsedPasswordLength = parseInt(passwordLength); //converts user entry (string) to number 
//     console.log(parsedPasswordLength);

//     //conditional statement checks if number entered is between 8 and 128 
//     if(parsedPasswordLength >= 8 && parsedPasswordLength <= 128 ){
//       console.log('password length: ' + parsedPasswordLength);
//       validEntry = true; //number meets criteria so loop is ended
//     }
//     else{
//       alert('Your entry is invalid. Please enter a number between 8 and 128'); //criteria not met - loop while execute again
//     }
//   }

// }

// getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {
var randomIndex = Math.floor(Math.random() * arr.length)
  
// console.log(arr.at(randomIndex));
return (arr.at(randomIndex))
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