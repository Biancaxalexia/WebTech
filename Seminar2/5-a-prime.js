//Exemplu
const checkPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      return false;
    }
  }
  return true;
};

if (process.argv.length <= 3) {
  console.log("not enough parameters");
} else {
  console.log(checkPrime(parseInt(process.argv[2])));
}

//Exercitiu
function fibonacci(n) {
  if (n < 0) return "Număr invalid";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

if (process.argv.length <= 2) {
  console.log("Nu ai introdus ordinul elementului!");
} else {
  const n = parseInt(process.argv[2]);
  console.log(fibonacci(n));
}
