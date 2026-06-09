class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(s.length < t.length) return ""

        let freq = new Map()
        let required = 0

        for(const char of t){
            if(!freq.has(char)){
                required++
                freq.set(char, 0)
            }

            freq.set(char, freq.get(char) + 1)
        }

        let left = 0;
        let minimum = 0;

        let min = Infinity
        let res = ""


        for(let right = 0; right< s.length; right++){
            const rightChar = s[right]

            if(freq.has(rightChar)){
                freq.set(rightChar, freq.get(rightChar) - 1)

                if(freq.get(rightChar) === 0) minimum++;
            }

            while(required === minimum){
                if(min > right - left + 1){
                    min = right - left + 1
                    res = s.substring(left, right + 1)
                }

                const leftChar = s[left++]

                if(freq.has(leftChar)){
                    if(freq.get(leftChar) === 0) minimum--;
                    freq.set(leftChar, freq.get(leftChar) + 1)
                }
            }
        }

        return res
    }
}
