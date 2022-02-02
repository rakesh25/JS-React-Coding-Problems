//https://bigfrontend.dev/problem/implement-curry-with-placeholder

function curry(fn) {
    return function curried(...args) {
        //args can be any number, even more than 3 as expected by join function param count.
        //So, before calling fn, need to make sure that arg count is 3 and none of them are placeholders

        let sanitizedArgs = args.slice(0, fn.length);
        let hasNoPlaceholder = sanitizedArgs.every((arg) => arg !== curry.placeholder);

        //sanitizedArgs length can be less than 3 after the slice, for ex: when called like curriendJoin(1,2);
        if(sanitizedArgs.length === fn.length && hasNoPlaceholder) {
            return fn.call(this, ...sanitizedArgs);
        }

        return function next(...nextArgs) {
            return curried.call(this, ...mergeArgs(sanitizedArgs, nextArgs));
        }
    }
}

function mergeArgs(args, nextArgs) {
    let result = [];

    args.forEach((arg) => {
        if(arg === curry.placeholder && nextArgs.length) {
            result.push(nextArgs.shift());
        }else{
            result.push(arg);
        }
    });

    //It may happen that args are less than nextArgs, in which case args.forEach loop finishes but nextArgs are still available
    return [...result, ...nextArgs];
}

const  join = (a, b, c) => {
    return `${a}_${b}_${c}`
};
 
const curriedJoin = curry(join);

curry.placeholder = Symbol();

const _ = curry.placeholder;
 
console.log(curriedJoin(1, 2, 3)); // '1_2_3'
 
console.log(curriedJoin(_, 2)(1, 3)); // '1_2_3'
 
console.log(curriedJoin(_, _, _)(1)(_, 3)(2)); // '1_2_3'