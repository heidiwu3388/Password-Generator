// Assignment Code
var generateBtn = document.querySelector("#generate");
var SpecialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; //32 available special characters

// generate random lower case character - 26 characters, starts at ASCII 97
function genRandomLower() { return String.fromCharCode(Math.floor(Math.random() * 26) + 97); }

// generate random upper case character - 26 characters, starts at ASCII 65
function genRandomUpper() { return String.fromCharCode(Math.floor(Math.random() * 26) + 65); }

// generate random single digit number - 10 numbers (0-9), starts at ASCII 48
function genRandomNumber() { return String.fromCharCode(Math.floor(Math.random() * 10) + 48); }

// generate random special character
function genRandomSpecial() {
  var randomIndex = Math.floor(Math.random() * SpecialChar.length)
  return(SpecialChar[randomIndex]);
}

//console.log(genRandomLower(), genRandomUpper(), genRandomNumber(), genRandomSpecialChar());

// return a random password
function generatePassword() {
  // create a variable to store the password
  var passwordGenerated = "";
  var pwdLength;
  var hasLower;
  var hasUpper;
  var hasNumber;
  var hasSpecialChar;
  var arrCharType = [];

  // get password length from user
  pwdLength = window.prompt("Please input the length of the password:\n(8-128 characters)");
  console.log("pwdLength: " + pwdLength);
  // if user click CANCEL, do nothing
  if (pwdLength === null) return null;
  
  // input validation: length must be 8-128
  while (pwdLength<8 || pwdLength>128) { 
    alert("Invalid password length❗\nIt must be 8-128 Characters.\nTry again ...");
    pwdLength = window.prompt("Please input the length of the password:\n(8-128 characters)");
    console.log("pwdLength: " + pwdLength);
    if (pwdLength === null) return null;
  }

  // get password criteria from user and
  // construct the array with all the included character types
  if (hasLower = window.confirm("Include lowercase letters?")) {
    arrCharType.push("Lower");
  };
  if (hasUpper = window.confirm("Include uppercase letter?")) {
    arrCharType.push("Upper");
  };
  if (hasNumber = window.confirm("Include numbers?")) {
    arrCharType.push("Number");
  }
  if (hasSpecialChar = window.confirm("Include Special Characters?\n" + SpecialChar)) {
    arrCharType.push("Special");
  }
  console.log(hasLower, hasUpper, hasNumber, hasSpecialChar, arrCharType);
  // input validation: at least one character type should be included
  if (arrCharType.length === 0) {
    window.alert("No character type is selected❗\nAt least one of the character types (Lowercase, Uppercase, Number or Special Character) should be included.");
    return null;
  }
  
  // loop for the length of the password
  for (let i=0; i<pwdLength; i++)
  {
    // randomly select character type from the arrCharType
    var charType = arrCharType[Math.floor(Math.random() * arrCharType.length)];
    console.log("charType: " + charType);
    
    // generate random character according to the randomly selected type
    switch(charType) {
      case "Lower":
        passwordGenerated+=genRandomLower();
        break;
      case "Upper":
        passwordGenerated+=genRandomUpper();
        break;
      case "Number":
        passwordGenerated+=genRandomNumber();
        break;
      case "Special":
        passwordGenerated+=genRandomSpecial();
        break;
    }
  }
  // return password
  return passwordGenerated;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("password: " + password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


