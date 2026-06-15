class MaxHeap {
    constructor() { this.h = []; }
    size() { return this.h.length; }
    peek() { return this.h[0]; }
    push(v) {
        this.h.push(v);
        let i = this.h.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.h[p] >= this.h[i]) break;
            [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
            i = p;
        }
    }
    pop() {
        const top = this.h[0], last = this.h.pop();
        if (this.h.length) {
            this.h[0] = last;
            let i = 0, n = this.h.length;
            while (true) {
                let l = 2*i+1, r = 2*i+2, big = i;
                if (l < n && this.h[l] > this.h[big]) big = l;
                if (r < n && this.h[r] > this.h[big]) big = r;
                if (big === i) break;
                [this.h[big], this.h[i]] = [this.h[i], this.h[big]];
                i = big;
            }
        }
        return top;
    }
}

class MinHeap {              // same code, comparators flipped
    constructor() { this.h = []; }
    size() { return this.h.length; }
    peek() { return this.h[0]; }
    push(v) {
        this.h.push(v);
        let i = this.h.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.h[p] <= this.h[i]) break;
            [this.h[p], this.h[i]] = [this.h[i], this.h[p]];
            i = p;
        }
    }
    pop() {
        const top = this.h[0], last = this.h.pop();
        if (this.h.length) {
            this.h[0] = last;
            let i = 0, n = this.h.length;
            while (true) {
                let l = 2*i+1, r = 2*i+2, small = i;
                if (l < n && this.h[l] < this.h[small]) small = l;
                if (r < n && this.h[r] < this.h[small]) small = r;
                if (small === i) break;
                [this.h[small], this.h[i]] = [this.h[i], this.h[small]];
                i = small;
            }
        }
        return top;
    }
}


class MedianFinder {
    constructor() {
        this.lo = new MaxHeap()
        this.hi = new MinHeap()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.lo.push(num)
        this.hi.push(this.lo.pop())

        if(this.hi.size() > this.lo.size()){
            this.lo.push(this.hi.pop())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.lo.size() > this.hi.size()) return this.lo.peek()

        return (this.lo.peek() + this.hi.peek()) / 2
    }
}
