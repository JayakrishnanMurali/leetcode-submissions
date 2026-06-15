class MinHeap {
    constructor(){
        this.heap = []
    }

    size(){
        return this.heap.length
    }

    peek(){
        return this.heap[0]
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
            const parent = Math.floor((idx-1) / 2)

            if(this.heap[parent] <= this.heap[idx]) break;

            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]]
            idx = parent;
        }
    }

    _bubbleDown(idx){
        const len = this.heap.length

        while(true){
            let smallest = idx;
            const left = 2*idx + 1;
            const right = 2*idx + 2;

            if(left < len && this.heap[left] < this.heap[smallest]){
                smallest = left
            }

            if(right < len && this.heap[right] < this.heap[smallest]){
                smallest = right
            }

            if(smallest === idx) break;

            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]]

            idx = smallest
        }
    }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinHeap();

        for(const num of nums){
            this.add(num)
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.push(val);

        if(this.minHeap.size() > this.k){
            this.minHeap.pop()
        }

        return this.minHeap.peek()
    }
}
