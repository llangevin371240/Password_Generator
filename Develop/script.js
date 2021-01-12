// password character values variables
const specialValues = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const numberValues = "0123456789";
const upperCaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseValues = "abcdefghijklmnopqrstuvwxyz";

// empty values for password
let userOptions = "";
let finalPassword = "";

// generate password when 'click' is executed
const generateButton = document.getElementById('generateBtn')

generateButton.addEventListener('click', writePassword)

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// password function
function generatePassword() {

  // password length option
  var length = prompt('Chose between 8-128 characters');

  // return to function beg if user selects <8 or more >128
  if (parseInt(length) < 8 || parseInt(length) > 128) {
    generatePassword();

  } else {
    // password criteria options
    var special = confirm('Do you want special characters?');
    var numbers = confirm('Do you want numbers?');
    var upperCase = confirm('Do you want uppercase?');
    var lowerCase = confirm('Do you want lowercase?');
  
    if (special === true) {
      userOptions = userOptions + specialValues;
    }
    if (numbers === true) {
      userOptions = userOptions + numberValues;

    }
    if (upperCase === true) {
      userOptions = userOptions + upperCaseValues;

    }
    if (lowerCase === true) {
      userOptions = userOptions + lowerCaseValues;

    }
    // loop for password random index generation
    for (let i = 0; i < parseInt(length); i++) {

      let randomIndex = [Math.floor(Math.random() * userOptions.length)];

      finalPassword = finalPassword + userOptions[randomIndex];

    }
    // write password to screen
    return finalPassword;
  }
}

