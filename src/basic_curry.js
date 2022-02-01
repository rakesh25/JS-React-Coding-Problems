//Q: https://bigfrontend.dev/problem/implement-curry

function curry(fn){
    //...args is basically rest paramter syntax allowing curried function to accept indefinite number of arguments as an array
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
    return function curried(...args) {
        //fn.length is basically count of how many parameters function fn is declared to accept
        if(args.length >= fn.length) {
            return fn.call(this, ...args);
        }

        return function next(...nextArgs) {
            return curried.call(this, ...args.concat(nextArgs));
        }
    }
}

const join = (a, b, c) => {
    return `${a}_${b}_${c}`
 };
 
const curriedJoin = curry(join);
 
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
 
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
 
console.log(curriedJoin(1, 2)(3)); // '1_2_3'