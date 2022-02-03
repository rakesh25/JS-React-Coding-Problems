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
  
const func = (arg1, arg2) => {
    return arg1 + arg2;
};
  
const memoed = memo(func, () => "samekey");
  
console.log(memoed(1, 2));
console.log(memoed(1, 2));