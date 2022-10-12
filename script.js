// Assignment Code
var generateBtn = document.querySelector("#generate");
const SpecialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; //32 available special characters

// return a random password
function generatePassword() {
  // create a variable to store the password
  var passwordGenerated = "";
  var pwdLength;
  var hasLower;
  var hasUpper;
  var hasNumber;
  var hasSpecialChar;
  const arrCharType = [];

  // get password length from user
  pwdLength = window.prompt("Please input the length of the password:\n(8-128 characters)");
  // if user click CANCEL, do nothing
  if (pwdLength === null) return null;
  // input validation: length must be 8-128
  while (pwdLength<8 || pwdLength>128) { 
    alert("Invalid password length❗\nIt must be 8-128 Characters.\nTry again ...");
    pwdLength = window.prompt("Please input the length of the password:\n(8-128 characters)");
    if (pwdLength === null) return null;
  }

  // get password criteria from user and
  // construct the array with all the included character types
  if (hasLower = window.confirm("Include lowercase letters?")) {
    arrCharType.push("Lower");
  }
  if (hasUpper = window.confirm("Include uppercase letter?")) {
    arrCharType.push("Upper");
  }
  if (hasNumber = window.confirm("Include numbers?")) {
    arrCharType.push("Number");
  }
  if (hasSpecialChar = window.confirm("Include Special Characters?\n" + SpecialChar)) {
    arrCharType.push("Special");
  }
  // input validation: at least one character type should be included
  if (arrCharType.length === 0) {
    window.alert("No character type is selected❗\nAt least one of the character types (Lowercase, Uppercase, Number or Special Character) should be included.");
    return null;
  }
  
  console.log("arrCharType: ", arrCharType);
  // loop for the length of the password
  for (let i=0; i<pwdLength; i++)
  {
    //randomly select character type from the arrCharType
    let charType = arrCharType[Math.floor(Math.random() * arrCharType.length)];
    console.log("charType: " + i + " " + charType);
    
    //?? not sure if this is a better way to choose the charType
    //sequentially picking character type from arrCharType
    // let charType = arrCharType[i%arrCharType.length];
    // console.log("charType: " + i + " " + charType);
      
    
    // generate random character according to the randomly selected type
    switch(charType) {
      case "Lower":
        // generate random lower case character - 26 characters (a-z), starts at Unicode 97
        passwordGenerated += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        break;
      case "Upper":
        // generate random upper case character - 26 characters (A-Z), starts at Unicode 65
        passwordGenerated += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        break;
      case "Number":
        // generate random single digit number - 10 numbers (0-9), starts at Unicode 48
        passwordGenerated += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
        break;
      case "Special":
        // generate random special character from the array SpecialChar[] which contains all possible special characters
        passwordGenerated += SpecialChar[Math.floor(Math.random() * SpecialChar.length)];
        break;
    }
  }

  // return password
  return passwordGenerated;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


