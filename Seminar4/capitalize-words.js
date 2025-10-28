//Exemplu
String.prototype.capitalizeWords = function () {
  return this.replace(/\b[a-z]/g, (match) => match.toUpperCase());
};

console.log("these words will be capitalized".capitalizeWords());

//Exercitiu
Number.prototype.times = function (f) {
  let value = this.valueOf();
  for (let i = 0; i < value; i++) {
    f();
  }
};

let nr = new Number(7);
nr.times(() => {
  console.log("Test!");
});
