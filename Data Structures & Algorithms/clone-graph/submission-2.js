/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(node === null) return null

        const map = new Map()

        function dfs(nd){
            if(map.has(nd)) return map.get(nd);

            const clone = new Node(nd.val)
            map.set(nd, clone)

            for(const neigh of nd.neighbors){
                clone.neighbors.push(dfs(neigh))
            }

            return clone
        }

        

        return dfs(node)
    }
}
