https://devtools.tech/questions/s/how-would-you-implement-promiserace-from-scratch-or-promise-polyfills-or-javascript-interview-questions---qid---orv14AZtpF5qwu2QYjYR
function myCustomPromiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) => {
            promise.then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    });
}

//Example 1
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});
  
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

myCustomPromiseRace([promise1, promise2]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});


//Example 2
const promiseA = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'one');
});
  
const promiseB = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'two');
});

myCustomPromiseRace([promiseA, promiseB]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
