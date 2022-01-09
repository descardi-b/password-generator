// Start working code
// Global input choice variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Lower alphabetical characters
lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Upper alphabetical characters
upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Declared choices variable outside the function for global access
var choices;

var generateBtn = document.querySelector("#generate");

// Add event listener for click, running through the 
// generatePassword function and then placing the
// ps variable into the html object with id "password"
generateBtn.addEventListener("click", function () {
    var ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
    // Asks for user input
    enter = parseInt(window.prompt("How many characters would you like your password to be? Choose a value between 8 and 128."));
    // First if statement for user validation 
    if (!enter) {
        window.alert("You need to select a number!");
        generatePassword();
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(window.alert("You must choose a number between 8 and 128."));
        generatePassword();
    } else {
        // Continues once user input is validated
        confirmNumber = window.confirm("Will your password contain numbers?");
        confirmCharacter = window.confirm("Will your password contain special characters?");
        confirmUppercase = window.confirm("Will your password contain uppercase letters?");
        confirmLowercase = window.confirm("Will your password contain lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = window.alert("You must choose at least one option!");
        generatePassword();
    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, upperAlpha, lowerAlpha);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, upperAlpha);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, lowerAlpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(lowerAlpha, upperAlpha);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(lowerAlpha, upperAlpha);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(lowerAlpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(upperAlpha);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = lowerAlpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = lowerAlpha.concat(upperAlpha);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(upperAlpha);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = lowerAlpha;
    }
    else if (confirmUppercase) {
        choices = upperAlpha;
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}