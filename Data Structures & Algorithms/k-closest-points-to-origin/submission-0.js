class MaxHeap {
    constructor(){
        this.heap = []
    }

    peek(){
        return this.heap[0] ?? [0,0]
    }

    size(){
        return this.heap.length
    }

    push(point,dist){
        this.heap.push({
            point,
            dist
        })

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
            const parent = Math.floor((idx - 1 )/ 2)
            
            if(this.heap[parent].dist >= this.heap[idx].dist) break;

            [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]]

            idx = parent;
        }
    }

    _bubbleDown(idx){
        const len = this.heap.length;

        while(true){
            let largest = idx

            const left = 2*idx + 1
            const right = 2*idx + 2

            if(left < len && this.heap[left].dist > this.heap[largest].dist){
                largest = left
            }

            if(right < len && this.heap[right].dist > this.heap[largest].dist){
                largest = right
            }

            if(idx === largest) break;

            [this.heap[idx], this.heap[largest]] = [this.heap[largest], this.heap[idx]]

            idx = largest;
        }
    }

    toArray(){
        return this.heap.map(item => item.point)
    }


}

class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const heap = new MaxHeap()

        for(const point of points){
            const dist = point[0] * point[0] + point[1] * point[1]
            heap.push(point, dist)

            if(heap.size() > k) heap.pop()
        }

        return heap.toArray()
    }
}
