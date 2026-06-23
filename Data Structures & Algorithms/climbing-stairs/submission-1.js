class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = new Map()

        function dfs(i){
            if(i === n) return 1;
            if(i > n) return 0;

            if(memo.has(i)) return memo.get(i)

            const ways = dfs(i + 1) + dfs(i + 2)
            memo.set(i, ways)
            return ways
        }

        return dfs(0)
    }
}
