class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const parent = Array.from({length: n}, (_,i) => i)

        const find = (x) => {
            while(parent[x] !== x){
                parent[x] = parent[parent[x]]
                x = parent[x]
            }

            return x;
        }

        let count = n;

        for(const [a,b] of edges){
            const ra = find(a)
            const rb = find(b)

            if(ra !== rb){
                parent[ra] = rb
                count--;
            }
        }

        return count


    }   
}
