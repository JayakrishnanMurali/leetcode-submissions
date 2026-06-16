class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = []
        const path = []

        const len = nums.length;
        const used = new Array(len).fill(false)

        function backtrack(){
            if(path.length === len){
                res.push([...path])
                return
            }

            for(let i=0; i<len; i++){
                if(used[i]) continue;

                used[i] = true
                path.push(nums[i])
                backtrack(i+1)
                path.pop()
                used[i] = false
            }
        }

        backtrack()

        return res;
    }
}
