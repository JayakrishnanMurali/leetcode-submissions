class Node {
    constructor(key = 0, val = 0){
        this.key = key
        this.val = val
        this.prev = null
        this.next = null
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()

        this.left = new Node(0,0)
        this.right = new Node(0,0)

        this.left.next = this.right
        this.right.prev = this.left
    }

    remove(node){
        const prev = node.prev;
        const next = node.next;

        prev.next = next
        next.prev = prev
    }

    insert(node){
        const prev = this.right.prev

        prev.next = node
        node.prev = prev

        node.next = this.right
        this.right.prev = node
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)) return -1;

        const node = this.map.get(key)

        this.remove(node)
        this.insert(node)

        return node.val
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            this.remove(this.map.get(key))
        }

        const node = new Node(key, value)
        this.map.set(key, node)
        this.insert(node)

        if(this.map.size > this.capacity){
            const lru = this.left.next

            this.remove(lru)
            this.map.delete(lru.key)
        }

    }
}
