class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length !== n-1) return false

        const adj = Array.from({length: n} , () => [])
        for(const [a,b] of edges){
            adj[a].push(b)
            adj[b].push(a)
        }

        const visited = new Set()
        const dfs = (node) => {
            visited.add(node)

            for(const next of adj[node]){
                if(!visited.has(next)) dfs(next)
            }
        }

        dfs(0)
        return visited.size === n
    }
}
