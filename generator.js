
function getPasswordOptions() {

    var length = prompt("Enter password length (8-128)");

    if (length < 8 || length > 128) {

        alert("Invalid length");

        return;

    }
 
    var lowercase = confirm("Include lowercase characters?");

    var uppercase = confirm("Include uppercase characters?");

    var numeric = confirm("Include numeric characters?");

    var special = confirm("Include special characters? ($@%&*, etc.)");
 
    if (!lowercase && !uppercase && !numeric && !special) {

        alert("At least one character type should be selected");

        return;

    }
 
    return {

        length: length,

        lowercase: lowercase,

        uppercase: uppercase,

        numeric: numeric,

        special: special

    };

}
 
function getRandom(str) {

    return str.charAt(Math.floor(Math.random() * str.length));

}
 
function generatePassword() {

    var options = getPasswordOptions();

    if (!options) return "";
 
    var password = "";

    var characters = "";
 
    if (options.lowercase) characters += "abcdefghijklmnopqrstuvwxyz";

    if (options.uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (options.numeric) characters += "0123456789";

    if (options.special) characters += "$@%&*";
 
    for (var i = 0; i < options.length; i++) {

        password += getRandom(characters);

    }
 
    return password;

}
 
var generateBtn = document.querySelector('#generate');
 
function writePassword() {

    var password = generatePassword();

    var passwordText = document.querySelector('#password');
 
    passwordText.value = password;

}
 
generateBtn.addEventListener('click', writePassword);