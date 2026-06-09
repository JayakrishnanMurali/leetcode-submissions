class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let max = 0;
        let left = 0;
        let maxFreq = 0

        const map = new Map()

        for(let right = 0; right < s.length; right++){
            const char = s[right]

            map.set(char, (map.get(char) || 0) + 1)
            maxFreq = Math.max(maxFreq, map.get(char))

            while(right - left + 1 - maxFreq > k){
                const leftChar = s[left]
                map.set(leftChar, map.get(leftChar) - 1)
                left++
            }

            max = Math.max(max, right - left + 1)
        }

        return max;
    }
}
