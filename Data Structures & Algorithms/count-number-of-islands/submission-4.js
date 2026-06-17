class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const rows = grid.length
        const cols = grid[0].length

        let  count = 0;

        function dfs(r,c) {
            if(r < 0 || c < 0 || r>= rows || c>= cols || grid[r][c] === '0') return

            grid[r][c] = '0'
            dfs(r+1, c)
            dfs(r-1, c)
            dfs(r,c+1)
            dfs(r, c-1)
        }

        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
                if(grid[i][j] === '1'){
                    count++;
                    dfs(i,j)
                }
            }
        }

        return count
    }
}
