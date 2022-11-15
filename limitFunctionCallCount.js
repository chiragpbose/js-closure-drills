function limitFunctionCallCount(cb, n) {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned
  let countOfCalls = 0;
  function InvokeCB() {
    if (countOfCalls < n) {
      countOfCalls++;
      return cb();
    } else {
      console.log("limit for calls exceeded");
    }
  }
  return InvokeCB;
}

module.exports = limitFunctionCallCount;
