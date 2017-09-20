const counter = (array) => {
  return `There are ${array.length} elements in this array`;
};

const adder = (a,b) => {
  return `The sum of ${a} and ${b} is ${a+b}`;
};

const pi = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

// or you could do it this way and cut out more code!

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
}
