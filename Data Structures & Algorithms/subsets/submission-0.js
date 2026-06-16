class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [[]]

        for(const num of nums){
            res = res.concat(res.map((item) => [...item, num]))
        }

        return res
    }
}
