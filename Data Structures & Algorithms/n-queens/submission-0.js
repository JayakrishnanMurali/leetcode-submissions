class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const res = []
        const queens = []

        const cols = new Set()
        const diag1 = new Set()
        const diag2 = new Set()

        function buildBoard(){
            return queens.map((col) => ".".repeat(col) + "Q" + ".".repeat(n - col - 1))
        }

        function backtrack(row){
            if(row === n){
                res.push(buildBoard())
                return
            }

            for(let col =0; col<n; col++){
                if(cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;

                queens.push(col)
                cols.add(col)
                diag1.add(row - col)
                diag2.add(row + col)

                backtrack(row + 1)
                cols.delete(col)
                diag1.delete(row - col)
                diag2.delete(row + col)
                queens.pop()
            }
        }

        backtrack(0)
        return res;
    }
}
