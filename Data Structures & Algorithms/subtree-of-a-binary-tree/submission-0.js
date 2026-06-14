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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(!root) return false;

        if(this.isSametree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot)
    }


    isSametree(a,b){
        if(!a && !b) return true;
        if(!a || !b) return false

        if(a.val !== b.val) return false

        return this.isSametree(a.left, b.left) && this.isSametree(a.right, b.right)
    }
}
