class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {

        function dist(x) {
            return x[0]*x[0] + x[1]*x[1]
        }

        function partition(lo,hi){
            const pIdx = lo + Math.floor(Math.random()  * (hi - lo + 1))
            const pDist = dist(points[pIdx]);

            [points[pIdx], points[hi]] = [points[hi], points[pIdx]];

            let store = lo;
            for(let i=lo; i<hi; i++){
                if(dist(points[i]) < pDist){
                    [points[i], points[store]] = [points[store], points[i]]
                    store++;
                }
            }

            [points[store], points[hi]] = [points[hi], points[store]]

            return store;
        }


        let lo=0, hi = points.length - 1

        while(lo < hi){
            const p = partition(lo, hi)
            if(p === k) break;
            else if(p < k) lo = p + 1
            else hi = p - 1
        }

        return points.slice(0, k)
    }
}
