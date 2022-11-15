function counterFactory() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope
  //and return it.
  let number = 100;
  let object = {
    increment: (number) => number + 1,
    decrement: (number) => number - 1,
  };
  //   console.log(object.increment(number));
  return [object.increment(number), object.decrement(number)];
}

module.exports = counterFactory;
