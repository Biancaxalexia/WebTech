let sayHello = (name) => `Hello, ${name}!`;

console.log(sayHello(process.argv[2]));

let concatStrings = (array) => array.join(` `);
console.log(concatStrings(process.argv.slice(2)));
