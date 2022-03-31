//https://leetcode.com/explore/interview/card/adobe/483/array-and-strings/2490/

/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

let charsHashMap = new Array(128);
function longestSubstringWithoutRepeatingCharacter(str) {
    if(str.length<=1) return str.length;

    let slidingWindowLeft = 0;
    let slidingWindowRight = 0;

    let max = 0;

    while(slidingWindowRight<str.length) {
        if(check_repeated_chars(str, slidingWindowLeft, slidingWindowRight)) {
            slidingWindowLeft++;
        }else{
            max = Math.max(max, slidingWindowRight-slidingWindowLeft+1);
            slidingWindowRight++;
        }
    }

    return max;
};

function check_repeated_chars(str, left, right) {
    charsHashMap.fill(0);
    for(let i=left;i<=right;i++) {
        let index = str.charCodeAt(i);
        charsHashMap[index]++;
        if(charsHashMap[index]>1) {
            return true;
        }
    }

    return false;
}

console.log(longestSubstringWithoutRepeatingCharacter('abcabcbb'));