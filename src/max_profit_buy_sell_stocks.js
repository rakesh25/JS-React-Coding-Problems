//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

//O(n2)
/*
function maxProfit(prices) {
    let maxProfit=0;
    for(let i=0; i<prices.length; i++) {
        for(let j=i+1; j<prices.length; j++) {
            maxProfit = Math.max(maxProfit, prices[j]-prices[i]);
        }
    }
    return maxProfit;
}
*/

//O(n)
function maxProfit(prices) {
    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;

    for(let i=0; i<prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i]-minPrice);
        }
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));
