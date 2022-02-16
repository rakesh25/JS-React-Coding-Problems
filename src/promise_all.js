const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms, "world"));

wait(12000)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

Promise.all([Promise.resolve("hello"), wait()])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

function myPromiseAll(promises) {
  let result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      p.then((res) => {
        count++;
        result.push(res);
        if (count === promises.length) {
          resolve(result);
        }
      }).catch((err) => {
        console.log(err);
        reject();
      });
    });
  });
}

myPromiseAll([Promise.resolve("hello"), wait()]).then((val) =>
  console.log(val)
);
