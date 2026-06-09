class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const freq = new Map()
        
        let required = 0

        for(const char of s1){
            if(freq.has(char)){
               freq.set(char, freq.get(char)  + 1) 
            }
            else {
                required++;
                freq.set(char, 1)
            }
        }
    
        let left = 0;
        let matched = 0;


        for(let right=0;right < s2.length; right++){
            const rightChar = s2[right]
            if(freq.has(rightChar)){
                freq.set(rightChar, freq.get(rightChar) - 1)

                if(freq.get(rightChar) === 0) matched++
            }

            if(right - left + 1 > s1.length){
                const leftChar = s2[left]
                left++;

                if(freq.has(leftChar)){
                    if(freq.get(leftChar) === 0) matched--

                    freq.set(leftChar, (freq.get(leftChar) + 1))
                }
            }


            if (matched === required) return true;
        }


        return false;
    }
}
