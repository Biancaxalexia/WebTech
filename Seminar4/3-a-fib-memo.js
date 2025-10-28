//Exemplu
function fibGen() {
  const cache = [1, 1];
  const fib = (index) => {
    if (index < cache.length) {
      console.log("found " + index);
      return cache[index];
    } else {
      console.log("calculated " + index);
      cache[index] = fib(index - 1) + fib(index - 2);
      return cache[index];
    }
  };

  return fib;
}
const fib = fibGen();
console.log(fib(1));
console.log(fib(5));
console.log(fib(3));

//Exercitiu
function createExponential(base) {
  const memo = {};

  const power = (exponent) => {
    if (memo[exponent] !== undefined) {
      return memo[exponent];
    }

    let result;

    if (exponent === 0) {
      result = 1;
    } else if (exponent === 1) {
      result = base;
    } else {
      console.log(`Calculating ${base}^${exponent}...`);
      result = base * power(exponent - 1);
    }

    memo[exponent] = result;
    console.log(`Memo[${exponent}] = ${result}`);
    return result;
  };

  return power;
}

const exp4 = createExponential(4);
console.log("Rezultatul este " + exp4(5));
console.log("Rezultatul este " + exp4(5));
console.log("Rezultatul este " + exp4(2));
console.log("Rezultatul este " + exp4(3));
