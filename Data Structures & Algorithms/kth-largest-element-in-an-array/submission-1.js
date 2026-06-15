class MinHeap{
    constructor(){
        this.heap = []
    }

    peek(){
        return this.heap[0]
    }

    size(){
        return this.heap.length
    }

    push(val){
        this.heap.push(val)
        this._bubbleUp(this.heap.length - 1)
    }

    pop(){
        if(this.heap.length === 1) return this.heap.pop()

        const min = this.heap[0]
        this.heap[0] = this.heap.pop()
        this._bubbleDown(0)

        return min;
    }

    _bubbleUp(idx){
        while(idx > 0){
            const parent = Math.floor((idx - 1) / 2)

            if(this.heap[parent] <= this.heap[idx]) break;

            [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];

            idx = parent;
        }
    }

    _bubbleDown(idx){
        const len = this.heap.length;

        while(true){
            let smallest = idx;
            const left = 2*idx + 1;
            const right = 2*idx + 2;

            if(left < len && this.heap[left] < this.heap[smallest]){
                smallest = left
            }

            if(right < len && this.heap[right] < this.heap[smallest]){
                smallest = right;
            }

            if(smallest === idx) break;

            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];

            idx = smallest;
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        const heap = new MinHeap()

        for(const num of nums){
            heap.push(num)

            if(heap.size() > k) heap.pop()
        }

        return heap.peek()
    }
}
