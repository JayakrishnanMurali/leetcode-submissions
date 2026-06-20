class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const rows = board.length
        const cols = board[0].length

        const dirs = [[1,0],[ 0,1], [-1, 0], [0, -1]]

        const dfs = (r,c) => {
            if(r<0 || c<0 || r>= rows || c>= cols) return

            if(board[r][c] !== 'O') return

            board[r][c] = '#'

            for(const [dr,dc] of dirs){
                const nr = dr + r
                const nc = dc + c

                dfs(nr, nc)
            }
        }

        for(let r=0; r< rows; r++){
            dfs(r, 0)
            dfs(r, cols - 1)
        }

        for(let c=0;c<cols; c++){
            dfs(0, c)
            dfs(rows- 1,c )
        }

        for(let r=0; r<rows; r++){
            for(let c=0; c<cols; c++){
                if(board[r][c] === 'O') board[r][c] = 'X'
                else if(board[r][c] === '#') board[r][c] = 'O'
            }
        }
    }
}
