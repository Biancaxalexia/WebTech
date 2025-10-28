//Exemplu
const getTotalArea = (squareDimensions) => {
  return squareDimensions
    .map((side) => {
      return side * side;
    })
    .reduce((prev, current) => {
      return prev + current;
    }, 0);
};

const squareDimensions = [3, 5, 12, 3, 5, 3];

const result = getTotalArea(squareDimensions);
console.log("result: ", result);

//Exercitiu
const getSumOfDivisible = (numbers, divisor) => {
  return numbers
    .filter((number) => {
      return number % divisor === 0;
    })
    .reduce((prev, current) => {
      return prev + current;
    }, 0);
};

const numbers = [3, 6, 9, 12, 15, 20];
const divisor = 3;

const result2 = getSumOfDivisible(numbers, divisor);
console.log("result:", result2);
