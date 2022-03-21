//Custom Map
function myMap(cbFn, context=null) {
    let _this = context || this;

    if(!Array.isArray(_this)) throw TypeError("Context is not Array");

    let results = [];
    _this.forEach((elem, index) => {
        results.push(cbFn.call(_this, elem, index, _this));
    });

    return results;
}

Array.prototype.myMap = myMap;

const mapResult = [1,2,3,4].myMap(e => e*2);

console.table(mapResult);

//----------------------------------------------------------

//Custom Filter
function myFilter(cbFn, context=null) {
    let _this = context || this;

    if(!Array.isArray(_this)) throw TypeError("Context is not Array");

    let results = [];
    _this.forEach((elem, index) => {
        if(cbFn.call(_this, elem, index, _this)) {
            results.push(elem);
        }
    });

    return results;
}

Array.prototype.myFilter = myFilter;

const filterResult = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'].myFilter(word => word.length > 6);

console.table(filterResult);

//----------------------------------------------------------

//Custom Reduce
function myReduce(cbFn, accumulator) {
    if(!this.length && accumulator===undefined) throw TypeError("type error");

    for(let i=0; i<this.length; i++) {
        accumulator = accumulator ? cbFn.call(this, accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}

Array.prototype.myReduce = myReduce;

const reduceResult = [1,2,3,4].myReduce((acc, curr) => acc + curr);

console.log({reduceResult});

