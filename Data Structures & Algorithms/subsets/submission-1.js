class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = []
        const path = []

        function backtrack(start){
            res.push([...path])

            for(let i=start; i<nums.length; i++){
                path.push(nums[i])
                backtrack(i + 1)
                path.pop()
            }
            
        }

        backtrack(0)
        return res;
    }
}
