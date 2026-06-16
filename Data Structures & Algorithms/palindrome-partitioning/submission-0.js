class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = []
        const path = []

        function isPalendrome(str, lo, hi){
            while(lo < hi){
                if(str[lo] !== str[hi]) return false;
                lo++
                hi--
            }

            return true
        }

        function backtrack(start){
            if(start === s.length){
                res.push([...path])
                return
            }

            for(let i=start; i<s.length; i++){
                if(!isPalendrome(s, start, i)) continue;

                path.push(s.substring(start, i+1))
                backtrack(i+1)
                path.pop()
            }
        }

        backtrack(0)
        return res;
    }
}
