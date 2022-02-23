//https://medium.com/@masnun/creating-cancellable-promises-33bf4b9da39c

//Cancelling Promise with a function
const wait = (signal, ms) => {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(resolve, ms, "Hello");

    signal.catch((err) => {
      reject(err);
      clearTimeout(timeout);
    });
  });
};

const createCancellableSignal = () => {
  const ret = {};

  ret.signal = new Promise((res, rej) => {
    ret.cancel = () => {
      rej(new Error("Promise was cancelled"));
    };
  });

  return ret;
};

const { signal, cancel } = createCancellableSignal();

wait(signal, 1000)
  .then(() => console.log("Promise succeeds"))
  .catch((err) => console.log("Promise fails", err));

cancel();
