var meow = require("./settings.json"); //Import Json
const readline = require("readline"); // Import Readline for asking question
const rl = readline.createInterface({ 
  input: process.stdin, // Input
  output: process.stdout, // Output
});

console.log("Welcome!")
console.log(`Keymap: ${meow.Keymap}`)
console.log(`Purpose: ${meow.Description}`)

function compare(input) { // Input Function
  var oldConvert = ""; // I Placed here to avoid "undefined"
  for (var i = 0; i < input.length; i++) {
    Extract = input[i]; // Extract Input to each keys
    Convert = meow.keys[Extract]; // Calls keys from json value
    Spelling = oldConvert.concat(Convert);
    // Spelling = oldConvert + Convert; // Combine
    var oldConvert = Spelling; // and then change to new

    //console.log(chr, th);
    //console.log(Final);
  }
  console.log(`Tanslated: ${Spelling}`);
}

rl.question(": ", function (input) {
  compare(`${input}`);
});
