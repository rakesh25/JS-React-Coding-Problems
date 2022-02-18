function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

function shallowEqual(x, y) {
  //Object.is() determines if x and y are same values/object/array (true if equal else false)
  //basically this would help us to evaluate primitives equality
  if (Object.is(x, y)) {
    return true;
  }

  //if both are arrays
  if (Array.isArray(x) && Array.isArray(y)) {
    if (x.length !== y.length) {
      return false;
    }

    x.forEach((item, i) => {
      if (x[i] !== y[i]) {
        return false;
      }
    });
  }

  //if both are objects/arrays, then iterate over keys and compare values
  if (isObject(x) && isObject(y)) {
    //Can't use Object.keys because it only returns enumerable keys, not non-enumerable keys

    //Since we want all properties(not inherited ones),
    //We should use Object.getOwnPropertyNames
    //getOwnPropertyNames returns [0,1,2,3, length] for arr [1,2,3,4] which is why we handled arrays above (we could have used keys as well)
    let propertiesX = Object.getOwnPropertyNames(x);
    let propertiesY = Object.getOwnPropertyNames(y);

    if (propertiesX.length !== propertiesY.length) {
      return false;
    }

    propertiesX.forEach((property) => {
      if (x[property] !== y[property]) {
        return false;
      }
    });
  }

  return true;
}

let props = {
  status: "Incomplete",
  campaign: "Winter Collection",
  concept: ""
};

let nextProps = {
  status: "Incomplete",
  campaign: "Winter Collection",
  concept: "Go"
};

console.log("Shallow compare:--", shallowEqual(props, nextProps));
