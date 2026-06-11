// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null

        const map = new Map()

        let curr = head;

        while(curr){
            map.set(curr, new Node(curr.val))
            curr = curr.next;
        }

        curr = head
        while(curr){
            const clone = map.get(curr)

            clone.next = curr.next ? map.get(curr.next) : null
            clone.random = curr.random ? map.get(curr.random) : null

            curr = curr.next;
        }

        return map.get(head)
    }
}
