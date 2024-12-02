'use strict';

function createCounter(initialValue) {
  // start coding here
}

const counter = createCounter(10);
counter.increment(5); // the value after incrementing should be 15
counter.decrement(3); // the value after decrementing should be 12
counter.reset(); // the value after resetting should be 10
console.log(counter.getValue()); // this should produce 10
console.log(counter.getLogs()); // this should produce the following:
// [
//   "Incremented by 5, new value: 15",
//   "Decremented by 3, new value: 12",
//   "Counter reset to initial value: 10"
// ]
