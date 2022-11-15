const exportedfn = require("../cacheFunction");

let cb = (argument) => {
  return argument * 2;
};
let outputfn = exportedfn(cb);
console.log(outputfn(4));
console.log(outputfn(4));
