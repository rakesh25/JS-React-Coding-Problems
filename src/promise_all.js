const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms, "world"));

wait(2000)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

Promise.all([Promise.resolve("hello"), wait()])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

function myPromiseAll(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((res) => {
        result.push(res);
        if (index === promises.length - 1) {
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
