//Compose

function addFive(a) {
  return a + 5;
}

function substractTwo(a) {
  return a - 2;
}

function multiplyFour(a) {
  return a * 4;
}

const evaluate = compose(addFive, substractTwo, multiplyFour);
console.log("Compose result: ", evaluate(5));

const pipeEvaluate = pipe(addFive, substractTwo, multiplyFour);
console.log("Pipe result: ", pipeEvaluate(5));

function compose(...fns) {
  return function (arg) {
    return fns.reduceRight((acc, current) => current(acc), arg);
  };
}

function pipe(...fns) {
  return function (arg) {
    return fns.reduce((acc, current) => current(acc), arg);
  };
}
