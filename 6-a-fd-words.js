const sampleString = "the quick brown fox jumps over the lazy dog";

const getLetterFrequencies = (text) => {
  const result = {};
  const letters = text.replace(/\s/g, "");

  for (let letter of letters) {
    if (letter in result) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }

  const totalLetters = letters.length;

  for (let letter in result) {
    result[letter] /= totalLetters;
  }
  return result;
};

console.log(getLetterFrequencies(sampleString));
