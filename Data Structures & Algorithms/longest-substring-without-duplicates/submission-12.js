class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        if(!s.length) return 0;

        let set = new Set()
        let maxSubstring = 0;

        let left = 0;

        for(let right = 0; right < s.length; right++){
            const char = s[right]

            while(left < right && set.has(char)){
                set.delete(s[left])
                left++;
            }

            set.add(char)
            maxSubstring = Math.max(maxSubstring, right - left + 1)
        }

        return maxSubstring;
    }
}
