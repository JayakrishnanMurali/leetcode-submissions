class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;

        let maxProfit = -Infinity

        for(let right=0; right < prices.length; right++){
            if(prices[left] >= prices[right]){
                left = right;
            }

            maxProfit = Math.max(maxProfit, prices[right] - prices[left])

        }

        return maxProfit
    }
}
