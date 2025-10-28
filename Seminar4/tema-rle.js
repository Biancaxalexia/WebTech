const { readFileSync } = require("fs");

function runLengthEncode(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid input: not a string");
  }

  const encoded = [];
  let prevChar = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === prevChar) {
      count++;
    } else {
      encoded.push(prevChar + count);
      prevChar = str[i];
      count = 1;
    }
  }

  encoded.push(prevChar + count);

  return encoded.join("");
}

function main() {
  try {
    const fileContent = readFileSync("./input.txt", "utf8");
    const compressed = runLengthEncode(fileContent);
    console.log("RLE result:", compressed);
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
}

main();
