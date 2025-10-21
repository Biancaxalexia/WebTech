const words = [
  "fox",
  "wolf",
  "snake",
  "crocodile",
  "lion",
  "cat",
  "crocodile",
  "horse",
];

const forbiddenWord = "crocodile";
const minLength = 4;

const filterWords = (words, forbiddenWord, minLength) => {
  const result = words.filter((word) => {
    if (word !== forbiddenWord && word.length >= minLength) {
      return true;
    }
    return false;
  });
  return result;
};

console.log(filterWords(words, forbiddenWord, minLength));

const filterWords2 = (words, forbiddenWord, minLength) =>
  words.filter((word) => word !== forbiddenWord && word.length >= minLength);

console.log(filterWords2(words, forbiddenWord, minLength));

const years = [2005, 2010, 1999, 1980, 2012];
const currentYear = 2025;

const ages = years.map((year) => currentYear - year).filter((age) => age > 18);

console.log(ages);
