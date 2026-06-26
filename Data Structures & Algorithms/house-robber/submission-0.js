class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length

        const memo = new Array(n).fill(-1)

        function dp(i){
            if(i < 0) return 0
            if(i === 0) return nums[0]
            if(memo[i] !== -1) return memo[i]

            memo[i] = Math.max(dp(i-1), dp(i-2) + nums[i])

            return memo[i]
        }

        return dp(n-1)
    }
}
