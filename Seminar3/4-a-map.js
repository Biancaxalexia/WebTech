//Exemplu
const sampleArray = [1, 2, 3, 4, 5];

const map = (array, transformation) => {
  const result = [];
  for (const element of array) {
    result.push(transformation(element));
  }
  return result;
};
console.log(map(sampleArray, (x) => x * 2));

//Exercitiu
const sampleArray2 = [1, 2, 3, 4, 5];
const reduce = (array, reducer, initialValue) => {
  let result = initialValue;
  for (const element of array) {
    result = reducer(result, element);
  }
  return result;
};

console.log(reduce(sampleArray2, (a, b) => a + b, 0));
