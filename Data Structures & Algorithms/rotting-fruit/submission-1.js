class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length
        const cols = grid[0].length
        const queue = []
        let fresh = 0;

        for(let r=0; r<rows;r++){
            for(let c=0; c<cols; c++){
                if(grid[r][c] === 2){
                    queue.push([r,c])
                }else if(grid[r][c] === 1) {
                    fresh++
                }
            }
        }


        if(fresh === 0) return 0;

        let mins = 0;
        let dirs = [[0,1],[0,-1],[1,0],[-1,0]]

        while(queue.length){
            const size = queue.length;
            let isRottedThisRound = false;

            for(let i=0; i<size; i++){
                const [r,c] = queue.shift()

                for(const [dr,dc] of dirs){
                    const nr = dr + r
                    const nc = dc + c

                    if(nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;

                    if(grid[nr][nc] !== 1) continue;
                    grid[nr][nc] = 2;
                    fresh--;
                    isRottedThisRound = true;
                    queue.push([nr, nc])

                }

            }
                if(isRottedThisRound) mins++
        }

        return fresh === 0 ? mins: -1
    }
}
