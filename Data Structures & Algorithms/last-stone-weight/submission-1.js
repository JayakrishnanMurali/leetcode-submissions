class MaxHeap {
    constructor(){
        this.heap = []
    }

    peek(){
        return this.heap[0] ?? 0
    }

    size(){
        return this.heap.length;
    }

    push(val){
        this.heap.push(val)
        this._bubbleUp(this.heap.length - 1)
    }

    pop(){
        if(this.heap.length === 1) return this.heap.pop()

        const max = this.heap[0]
        this.heap[0] = this.heap.pop()
        this._bubbleDown(0)

        return max;
    }

    _bubbleUp(idx){
        while(idx > 0){
            const parent = Math.floor((idx - 1)  / 2)

            if(this.heap[parent] >= this.heap[idx]) break;

            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]]

            idx = parent;
        }
    }

    _bubbleDown(idx){
        const len = this.heap.length

        while(true){
            let largest = idx;
            const left = 2*idx + 1
            const right = 2*idx + 2

            if(left < len && this.heap[left] > this.heap[largest]){
                largest = left;
            }

            if(right < len && this.heap[right] > this.heap[largest]){
                largest = right;
            }

            if(largest === idx) break;

            [this.heap[largest], this.heap[idx]] = [this.heap[idx],this.heap[largest]]

            idx = largest;
        }
    }
}

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxHeap()

        for(const stone of stones){
            heap.push(stone)
        }

        while(heap.size() > 1){
            const s1 = heap.pop()
            const s2 = heap.pop()

            if(s1 < s2){
                heap.push(s2 - s1)
            } else if(s2 < s1){
                heap.push(s1 - s2)
            }
        }

        return heap.peek()
    }
}
