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

        const maxFreq = Math.max(...freq) 

        const countMaxFreq = freq.filter((item) => item === maxFreq).length

        const skeleton = (maxFreq - 1) * (n + 1) + countMaxFreq

        return Math.max(skeleton, tasks.length)
    }
}
