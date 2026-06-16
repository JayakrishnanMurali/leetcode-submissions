class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = []
        const path = []

        function backtrack(open, close){
            if(path.length === 2*n){
                res.push(path.join(""))
                return
            }

            if(open < n){
                path.push("(")
                backtrack(open + 1, close)
                path.pop()
            }

            if(close < open){
                path.push(")")
                backtrack(open, close + 1)
                path.pop()
            }

        }

        backtrack(0, 0)
        return res;
    }
}
