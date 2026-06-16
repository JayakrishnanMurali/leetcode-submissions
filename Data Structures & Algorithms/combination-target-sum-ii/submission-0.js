class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = []
        const path = []
        candidates.sort((a,b) => a-b)

        function backtrack(start, remaining){
            if(remaining === 0){
                res.push([...path])
                return
            }

            if(remaining < 0) return;

            for(let i=start; i<candidates.length; i++){
                if(i > start && candidates[i] === candidates[i-1]) continue
                path.push(candidates[i])
                backtrack(i+1, remaining - candidates[i])
                path.pop()
            }
        }   

        backtrack(0, target)

        return res;
    }
}
