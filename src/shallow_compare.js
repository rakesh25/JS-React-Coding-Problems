function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

function shallowEqual(x, y) {
  //Object.is() determines if x and y are same values/object (true if equal else false)
  //basically this would help us to evaluate primitives equality
  if (Object.is(x, y)) {
    return true;
  }

  //if both are objects, then iterate over keys and compare values
  if (isObject(x) && isObject(y)) {
    //Can't use Object.keys because it only returns enumerable keys, not non-enumerable keys

    //Since we want all properties(not inherited ones),
    //We should use Object.getOwnPropertyNames
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

    return true;
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
