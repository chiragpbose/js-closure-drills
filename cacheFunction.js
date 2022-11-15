function cacheFunction(cb) {
  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to
  //invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

  let cache = {};
  return function invokeCB(argument) {
    if (cache[argument]) {
      return cache[argument] + " as stored in cache";
    } else {
      cache[argument] = cb(argument);
      return cache[argument] + " as calculated from the function";
    }
  };
}

module.exports = cacheFunction;
