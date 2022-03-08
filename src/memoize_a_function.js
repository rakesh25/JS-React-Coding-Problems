//https://bigfrontend.dev/problem/implement-general-memoization-function

/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
    let result = {};
    return function memoized(...args) {
      let key = resolver ? resolver.call(this, ...args) : JSON.stringify(args);
      if (!result[key]) {
        result[key] = func.call(this, ...args);
      }
      return result[key];
    };
}
  
const func = (...args) => {
    return args.reduce((acc, cur) => acc + cur);
};
  
const memoed = memo(func, () => "samekey");

console.time("Measure First time--");
console.log(memoed(1,2,3));
console.timeEnd("Measure First time--");

console.time("Measure Second time--");
console.log(memoed(1,2,3));
console.timeEnd("Measure Second time--");