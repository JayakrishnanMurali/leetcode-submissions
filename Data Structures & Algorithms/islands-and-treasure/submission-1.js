class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        if(!grid.length) return;

        const INF = 2147483647
        const dirs = [[1,0], [0,1], [-1,0], [0,-1]]

        const rows = grid.length;
        const cols = grid[0].length

        const queue = []

        for(let r=0; r<rows; r++){
            for(let c=0; c<cols; c++){
                if(grid[r][c] === 0){
                    queue.push([r,c])
                }
            }
        }

        while(queue.length){
            const [r,c] = queue.shift()

            for(const [dr,dc] of dirs){
                const nr = dr + r
                const nc = dc + c

                if(nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === INF){
                    grid[nr][nc] = grid[r][c] + 1
                    queue.push([nr, nc])
                }
            }

        }
    }
}
