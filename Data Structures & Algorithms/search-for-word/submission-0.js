class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length
        const cols = board[0].length

        const path = []
        function backtrack(r,c,idx){
            if(idx === word.length) return true;

            if(r<0 || c < 0 || r>=rows || c >= cols) return false;

            if(board[r][c] !== word[idx]) return false

            const temp = board[r][c]
            board[r][c] = "#"

            const found = backtrack(r+1, c,idx + 1)
            || backtrack(r-1, c, idx + 1)
            || backtrack(r,c+1, idx + 1)
            || backtrack(r,c-1, idx + 1)

            board[r][c] = temp
            return found;
        }

        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
                if(backtrack(i, j, 0)) return true
            }
        }

        return false;
    }
}
