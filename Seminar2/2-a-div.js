//Exemplu
function checkDivisible(n, divisor) {
  if (n % divisor) {
    return false;
  } else {
    return true;
  }
}

console.log(checkDivisible(10, 2));
console.log(checkDivisible(10, 3));

//Exercitiu
function countCharacters(str1, str2) {
  if (str1.length !== str2.length) {
    return -1;
  } else {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
      }
    }
    return count;
  }
}

console.log(countCharacters(process.argv[2], process.argv[3]));
