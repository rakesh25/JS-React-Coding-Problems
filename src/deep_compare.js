import { isObject, shallowEqual } from "./shallow_compare";

function deepEqual(x, y) {
  if (isObject(x) && isObject(y)) {
    let propertiesX = Object.keys(x);
    let propertiesY = Object.keys(y);
    return propertiesX.reduce(
      (acc, curr) => acc && deepEqual(x[curr], y[curr]),
      propertiesX.length === propertiesY.length
    );
  } else {
    return x === y; //primitives values
  }
}

let concept = {
  storeConceptName: "Books",
  storeConceptId: 123
};

let props = {
  status: "Incomplete",
  campaign: "Winter Collection",
  concept
};

let nextProps = {
  status: "Incomplete",
  campaign: "Winter Collection",
  concept
};

console.log("Is DeepEqual---", deepEqual(props, nextProps));
console.log("Is ShallowEqual---", shallowEqual(props, nextProps));
