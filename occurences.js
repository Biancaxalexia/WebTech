function occurences(text, character) {
  let count = 0;
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === character) {
      count++;
    }
  }
  return count;
}

console.log(occurences("sample text", "e"));

function occurences(text, character) {
  return text.split(character).length - 1;
}

console.log(occurences("another text", "h"));

function createArray(...numbers) {
  return numbers;
}

console.log(createArray(1, 5, 9, 12, 20));
