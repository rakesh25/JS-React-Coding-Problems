export class SimplePromise {
  constructor(executorFunc) {
    this.promiseChain = [];
    this.handleError = () => {};
    this.onResolve = this.onResolve.bind(this);
    this.onReject = this.onReject.bind(this);
    executorFunc(this.onResolve, this.onReject);
  }

  //PUBLIC METHOD
  //then in real promise implementation creates a NEW promise inside
  //for simplicity, we are returning same promise
  then(handleSuccess) {
    this.promiseChain.push(handleSuccess);
    return this;
  }

  //PUBLIC METHOD
  //catch in real promise implementation creates a NEW promise inside
  //for simplicity, we are returning same promise
  catch(handleError) {
    this.handleError = handleError;
    return this;
  }

  //PRIVATE METHOD
  onResolve(val) {
    let finalVal = val;
    try {
      this.promiseChain.forEach((successFn) => {
        finalVal = successFn(finalVal);
      });
    } catch (err) {
      this.promiseChain = [];
      this.onReject(err);
    }
  }

  //PRIVATE METHOD
  onReject(err) {
    this.handleError(err);
  }
}
