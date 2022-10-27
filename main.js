// import meow from "./keys.json" assert { type: "json" };
var meow = require("./keys.json");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function compare(input) {
    var oldConvert = "";
  for (var i = 0; i < input.length; i++) {
    Extract = input[i];
    Convert = meow.keys[Extract];
    Spelling = oldConvert+Convert;
   var oldConvert = Spelling;

    //console.log(chr, th);
    //console.log(Final);
  }
  console.log(`Tanslated: ${Spelling}`);
}

rl.question(": ", function (input) {
  compare(`${input}`);
});
