let exportedfn = require("../limitFunctionCallCount.js");

let cb = () => {
  console.log("Hello world!");
};
let i = exportedfn(cb, 2);
console.log(i());
console.log(i());
console.log(i());
console.log(i());
