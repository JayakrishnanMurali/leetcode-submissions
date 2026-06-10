/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let count = 0;

        let curr = head;

        while(curr){
            count++
            curr = curr.next
        }

        if (count === n) {
            return head.next;
        }

        let target = count - n - 1

        curr = head

        while(target > 0){
            target--;
            curr = curr.next
        }

        curr.next = curr.next.next

        return head

    }
}
