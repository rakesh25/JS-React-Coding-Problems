//https://bigfrontend.dev/problem/implement-Promise-all
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
 function myPromiseAll(promises) {
  // your code here
  let result = [];
  let count = 0;
  const _promises = promises.map((promise) => promise instanceof Promise ? promise : Promise.resolve(promise));

  if(_promises.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    _promises.forEach((promise) => {
      promise.then((res) => {
        result.push(res);
        count++;
        if(count === _promises.length) {
          resolve(result);
        }
      }).catch((err) => {
        reject(err);
      })
    })
  })
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms, "world"));

myPromiseAll([Promise.resolve("hello"), 1, 2, wait(1000)]).then((val) =>
  console.log(val)
);
