/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {

        function dfs(node, max){
            if(!node) return 0;


            const count = node.val >= max ? 1 : 0

            const newMax = Math.max(max, node.val)
    
            return count + dfs(node.left, newMax) +dfs(node.right, newMax)
        }

        return dfs(root, -Infinity)
    }
}
