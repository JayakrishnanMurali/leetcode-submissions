class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const rows = heights.length
        const cols = heights[0].length

        const pacific = Array.from({length: rows}, () => new Array(cols).fill(false))
        const atlantic = Array.from({length: rows}, () => new Array(cols).fill(false))

        const dirs = [[1,0], [0,1], [-1, 0], [0,-1]]

        const dfs = (r,c,ocean, prev) => {
            if(r< 0 || c<0 || r>=rows || c>= cols) return;
            if(ocean[r][c]) return;
            if(heights[r][c] < prev) return

            ocean[r][c] = true

            for(const [dr,dc] of dirs){
                const nr = r + dr
                const nc = c + dc

                dfs(nr, nc, ocean, heights[r][c])
            }

        }

        for(let c=0; c<cols;c++){
            dfs(0, c, pacific, -Infinity)
            dfs(rows-1, c, atlantic, -Infinity)
        }

        for(let r=0; r<rows; r++){
            dfs(r, 0, pacific, -Infinity)
            dfs(r, cols - 1, atlantic, -Infinity)
        }

        const res = []

        for(let r=0; r<rows; r++){
            for(let c=0; c<cols; c++){
                if(pacific[r][c] && atlantic[r][c]) res.push([r,c])
            }
        }

        return res;
    }
}
