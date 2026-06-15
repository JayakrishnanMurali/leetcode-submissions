class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const code = "A".charCodeAt(0)
        const freq = new Array(26).fill(0)

        for(const task of tasks){
            freq[task.charCodeAt(0) - code]++
        }

        const heap = freq.filter((item) => item > 0).sort((a,b) => b-a)

        let time = 0;

        while(heap.length > 0){
            const cooldown = []

            for(let i=0; i<=n; i++){
                if(heap.length > 0){
                    const count = heap.shift() - 1;
                    if(count > 0) cooldown.push(count)
                }

                time++;

                if(heap.length === 0 && cooldown.length === 0) break;
            }

            for(const c of cooldown){
                heap.push(c)
            }
            
            heap.sort((a,b) => b-a)
        }

        return time;
    }
}
