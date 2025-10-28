//Exemplu
function addToArray() {
  let args = arguments;
  let array = arg[0];
  for (var i = 1; i < args.length; i++) {
    array.push(args[i]);
  }
  return array;
}

let array1 = ["a"];
console.log(addToArray(array1, "b", "c").join(", "));

function addToArray(array, ...args) {
  for (var i = 0; i < args.length; i++) {
    array.push(args[i]);
  }

  return array;
}

let array2 = ["d"];
console.log(addToArray(array2, "e", "f").join(", "));

//Exercitiu
function combineArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return "Array-urile nu au aceeași lungime!";
  } else {
    let result = [];
    for (var i = 0; i < array1.length; i++) {
      result.push(array1[i]);
      result.push(array2[i]);
    }
    return result;
  }
}

let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

console.log(combineArrays(arr1, arr2).join(", "));
