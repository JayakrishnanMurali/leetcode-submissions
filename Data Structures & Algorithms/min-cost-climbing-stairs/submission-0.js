class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const n = cost.length
        const memo = new Array(n + 1).fill(-1)

        function dfs(i){
            if(i <= 1) return 0;

            if(memo[i] !== -1) return memo[i]

            memo[i] = Math.min(dfs(i-1) + cost[i-1], dfs(i-2) + cost[i-2])
            return memo[i]
        }

        return dfs(n)
    }
}
