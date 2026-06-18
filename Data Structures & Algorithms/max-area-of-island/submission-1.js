class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length
        const cols = grid[0].length
        let max = 0;

        function dfs(r, c){
            if(r<0||c<0||r>=rows||c>=cols||grid[r][c] !== 1){
                return 0;
            }

            grid[r][c] = 0;

            return 1 + dfs(r+1,c) + dfs(r,c+1) + dfs(r-1,c) + dfs(r, c-1)
        }

        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
                if(grid[i][j] === 1){
                    max = Math.max(max, dfs(i,j))
                }
            }
        }

        return max;
    }
}
