// Assignment Code
// include variables that allow acceptable characters
var generateBtn = document.querySelector("#generate");

var passwordCharacters = {
  lowercaseAlpha: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercaseAlpha: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  allowedNumbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  allowedSpecChar:[ "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "|", "}", "]", "{", "[", ":", ";", "/", "?", ".", ">", "<"],
  passMinLength: 8,
  passMaxLength: 128,
  characterSet: [],

  createCharset: function(selectLowerCase,selectUpperCase,selectSpecChar,selectNumbers){
    
    console.log(selectLowerCase);
    console.log(selectUpperCase);
    console.log(selectSpecChar);
    console.log(selectNumbers);
    if (selectLowerCase){
    //  this.characterSet.push(...this.lowercaseAlpha); // Dave says not yet :)
      this.characterSet= this.characterSet.concat(this.lowercaseAlpha);
      console.log(this.characterSet);
    }
    if (selectUpperCase){
    //  this.characterSet.push(...this.uppercaseAlpha); // Dave says not yet :)
      this.characterSet= this.characterSet.concat(this.uppercaseAlpha);
      console.log(this.characterSet);
     }
   if (selectNumbers){
    //  this.characterSet.push(...this.allowedNumbers); // Dave says not yet :)
      this.characterSet= this.characterSet.concat(this.allowedNumbers);
      console.log(this.characterSet);
    }
   if (selectSpecChar){
    //  this.characterSet.push(...this.allowedSpecChar); // Dave says not yet :)
      this.characterSet= this.characterSet.concat(this.allowedSpecChar);
      console.log(this.characterSet);
    }
  }
};
// determine criteria for password generation
// determine the password lenght and validate that it is within the min/max values
function generatePassword(){

passWordLength = Number(window.prompt("Please enter a value between 8 and 128 for the length of the password", ""));
console.log(passWordLength);
// continue to prompt for valid number of password characters
while
  (passWordLength < passwordCharacters.passMinLength)  
  {
  passWordLength = Number(window.prompt("Please enter a value between 8 and 128 for the length of the password", ""));
  console.log(passWordLength);
  }
while
  (passWordLength > passwordCharacters.passMaxLength)  
  {
  passWordLength = Number(window.prompt("Please enter a value between 8 and 128 for the length of the password", ""));
  console.log(passWordLength);
};

// determine character selection and create array for randomising a password

function selectCharacters() {
selectLowerCase = Boolean(window.confirm("Must the password contain lower case letters?")); 
console.log(selectLowerCase);
selectUpperCase = Boolean(window.confirm("Must the password contain upper case letters?")); 
console.log(selectUpperCase);
selectNumbers = Boolean(window.confirm("Must the password contain numbers?")); 
console.log(selectNumbers);
selectSpecChar = Boolean(window.confirm("Must the password contain special characters?")); 
console.log(selectSpecChar);
}

selectCharacters();

while (!this.selectLowerCase && !this.selectUpperCase && !this.selectSpecChar && !this.selectNumbers){
  window.alert ("You must select at least one character set option");
  selectCharacters();
}

passwordCharacters.createCharset(selectLowerCase,selectUpperCase,selectSpecChar,selectNumbers);
// the chatTotal is determined based on the chosen character sets that have been concatenated together to form the data set which will be used to generate the random password
var charTotal = (passwordCharacters.characterSet.length);
  console.log(passwordCharacters.characterSet);
  console.log(charTotal);
  console.log(passWordLength); 
  var i=0;
  var result="";
  while (i <= passWordLength){
       result = result + passwordCharacters.characterSet[Math.floor(Math.random() * charTotal)];
       i = i + 1;
  }
  console.log(result);
  
  return result;
}

function writePassword() {
   
  var password = generatePassword();
  // initialise values 
  passwordCharacters.characterSet=[];
  password.length=0;
  
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click",writePassword);
