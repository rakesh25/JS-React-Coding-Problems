function mergeSortedList(arrA, arrB) {
    let sortedArr = [];
    let arrALen = arrA.length;
    let arrBLen = arrB.length;
    let i=0;
    let j=0;
    let k=0;
    while(i<arrALen && j<arrBLen) {
        if(arrA[i] < arrB[j]) {
            sortedArr[k] = arrA[i];
            i++;
        }else {
            sortedArr[k] = arrB[j];
            j++;
        }
        k++;
    }

    while(i<arrALen) {
        sortedArr[k++] = arrA[i++];
    }

    while(j<arrBLen) {
        sortedArr[k++] = arrB[j++];
    }

    return sortedArr;
}

function mergeSort(arr) {
    if(arr.length<=1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return mergeSortedList(left, right);
}

console.table(mergeSort([2, 5, 10, 57, 9, 12, 13]));