//https://leetcode.com/explore/interview/card/adobe/483/array-and-strings/2494/

/*
Input: strs = ["flower","flow","flight"]
Output: "fl"

Input: strs = ["cir","car"]
Output: "c"
*/

function longestCommonPrefix(strs) {
    let minIndex = findSmallestStringIndex.call(null, strs);
    let result = "";

    for(let i=0; i<strs[minIndex].length; i++) { //f,l,o,w || c,i,r
        let count = 0;
        for(let j=0; j<strs.length; j++) {
            if(strs[minIndex][i] === strs[j][i]) {
                count++;
            }
        }
        if(count === strs.length) {
            result = result.concat(strs[minIndex][i]);
        }else{
            break;
        }
    }

    return result;
}

function findSmallestStringIndex(strs) {
    let min = Number.MAX_SAFE_INTEGER;
    let index=0;
    for(let i=0; i<strs.length; i++) {
        if(min > strs[i].length) {
            min = strs[i].length;
            index = i;
        }
    }
    return index;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["cir", "car"]));