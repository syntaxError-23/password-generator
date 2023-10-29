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

//new array to hold the characters of all other arrays
var selectedChars = [];

//Array holds character type arrays seperately
var charTypesArray = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters];
//Array holds names of each char type array respective to position in previous array
var chartypesNames = ['Special Characters', 'Numbers', 'Lowercased Letters', 'Uppercased Letters'];

//variable stores number of character types selected by user
var numberOfTypesSelected = 0;

// Function to prompt user for password options

function getPasswordOptions() {
  var validEntry = false; //variable to be used as condition in while loop

  alert('Please select at least 1 of the following 4 character types for your password'); //alert user to select at least one character type

  //For loop iterates through charTypesArray 
  for(var j=0; j<charTypesArray.length; j++){
    
    //a chartype is presented as an option in each iteration with this confirm
    var questionTypes = confirm('Would you like the password to include ' + chartypesNames[j].toUpperCase() + '? Click OK for yes or CANCEL for no');
    
    //if a char type is selected (questionTypes returns true) 
    if(questionTypes === true){
      selectedChars = selectedChars.concat(charTypesArray[j]); //the corresponding array is concatenated to the selectedChars array (initally empty)
      numberOfTypesSelected++; //variable counting number of types selected is incremented
    }
  }

  if(numberOfTypesSelected < 1){ //Checks if user has not selected any char types
    alert('You must select at least 1 character type. Please try again'); //Alerts user to select at least one char type
    return; //ends loop
  }

  numberOfTypesSelected = 0; //After the loop has been executed, the number of types selected is reset 

  //while loop runs as validEntry is false - as long as a number between 8 and 128 is not entered by user
  while(validEntry == false){
    //prompts user to enter desired password length and stores entry in the variable 'passwordLength'
    var passwordLength = prompt('How long would you like your password to be? Enter a number from 8 to 128 (including 8 and 128)');
    var parsedPasswordLength = parseInt(passwordLength); //converts user entry (string) to number 
 

    //conditional statement checks if number entered is between 8 and 128 
    if(parsedPasswordLength >= 8 && parsedPasswordLength <= 128 ){
      validEntry = true; //number meets criteria so loop is ended
    }
    else if(passwordLength === null){ //if user presses cancel button, loop is ended
      alert('No problem. Press the generate button when you would like a password'); //If user clicks cancel, the loop is ended
      return;
    }
    else{
      alert('Your entry is invalid. Please enter a number between 8 and 128'); //criteria not met - while loop execute again
    }

  }

return parsedPasswordLength;
} 

// Function for getting a random element from an array
function getRandom(arr) {
var randomIndex = Math.floor(Math.random() * arr.length); //random number generated (between 0 and array length) and stored in local variable
  
return (arr.at(randomIndex)); //targets random index in given array
}


var newPassword = []; //Array to hold randomly generated characters for password
var newPasswordString; //string to hold new password when above array is converted to a string

// Function to generate password with user input
function generatePassword() {

  var lengthOfPassword = getPasswordOptions(); //variable holds password length entered by user upon calling getPasswordOptions function

  //for loop iterates as long as it's iterator is less than user's desired passowrd length
  for(var i=0; i<lengthOfPassword; i++){  
    
    var currentChar = getRandom(selectedChars); //stores returned value of getRandom function - random index of selectedChars array in this instance
    newPassword.push(currentChar); //Value stored in array index targeted above is pushed to newPassword array

  }

  newPasswordString = newPassword.join(''); //.join method used to concatenated all stored array values into one string. This is stored in newPasswordString

  return newPasswordString; //returns new password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //calls generatePassword which returns newPasswordString
  var passwordText = document.querySelector('#password'); //targets textArea by id
  
  passwordText.value = password; //value of textArea assigned value of password (which holds value of newPasswordString)

}

// Reset arrays and variables that held characters te be used in password generation
function dataReset(){
  selectedChars.length = 0;
  newPassword.length = 0;
  newPasswordString = "";
}

// Add event listener to generate button
generateBtn.addEventListener('click', writeNewPassword = () => { //Function executed upon clicking generate button
  writePassword(); //Password written in textarea in webpage
  dataReset(); //once password is written on webpage, necessary arrays and variables are reset
});