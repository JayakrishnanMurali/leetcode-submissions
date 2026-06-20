class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        const wordset = new Set(wordList)

        if(!wordset.has(endWord)) return 0;

        const queue = [beginWord]
        let head = 0;
        let level = 1;
        const visited = new Set(beginWord);

        while(head < queue.length){
            const size = queue.length - head;
            for(let s=0; s<size; s++){
                const word = queue[head++]

                if(word === endWord) return level;

                for(let i=0; i<word.length; i++){
                    for(let c= 97; c<=122; c++){
                        const ch = String.fromCharCode(c)

                        if(ch === word[i]) continue;

                        const next = word.slice(0,i) + ch + word.slice(i + 1)

                        if(wordset.has(next) && !visited.has(next)){
                            visited.add(next)
                            queue.push(next)
                        }
                    }
                }
            }
            level++
        }

        return 0

    }
}
