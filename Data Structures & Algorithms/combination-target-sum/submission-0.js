class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = []
        const path = []

        function backtrack(start, remaining){
            if(remaining === 0) res.push([...path])

            if(remaining < 0) return

            for(let i=start; i<nums.length; i++){
                path.push(nums[i])
                backtrack(i, remaining - nums[i])
                path.pop()
            }
        }

        backtrack(0, target)
        return res;
    }
}
