//Exemplu
class Stream {
  #value;
  #nextValue;
  static #count = 0;

  constructor(value, nextValue) {
    this.#value = value;
    this.#nextValue = nextValue;
    Stream.#count++;
  }

  get value() {
    return this.#value;
  }

  get next() {
    this.#value = this.#nextValue(this.#value);
    return this.#value;
  }

  static get count() {
    return Stream.#count;
  }
}

class ConstantStream extends Stream {
  constructor(value) {
    super(value, (value) => value);
  }
}

class NextIntegerStream extends Stream {
  constructor() {
    super(0, (value) => value + 1);
  }
}

const constant = new ConstantStream(1);
const nextInteger = new NextIntegerStream();

for (let i = 0; i < 10; i++) {
  console.log(`constant[${i}] = ${constant.next}`);
  console.log(`nextInteger[${i}] = ${nextInteger.next}`);
}

console.log(Stream.count);

//Exercitiu
class IncrementalSequence {
    #currentValue;
    #nextValue;
  
    constructor(startValue) {
      this.#currentValue = startValue;
    }
  
    next() {
      this.#nextValue = this.#currentValue + 2;
      this.#currentValue = this.#nextValue;
      return this.#nextValue;
    }
  }
  
  let sequence = new IncrementalSequence(4);
  
  for (let i = 0; i < 10; i++) {
    console.log(sequence.next());
  }
  
