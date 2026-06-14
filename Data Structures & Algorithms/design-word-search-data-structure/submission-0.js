class TrieNode {
    constructor(){
        this.children = new Map()
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root

        for(const char of word){
            if(!curr.children.has(char)){
                curr.children.set(char, new TrieNode())
            }

            curr = curr.children.get(char)
        }

        curr.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(i, node){
            if(i === word.length) return node.isEnd;

            const char = word[i];

            if(char === "."){
                for(const child of node.children.values()){
                    if(dfs(i+1, child)) return true
                }
                return false;
            }

            if(!node.children.has(char)) return false;

            return dfs(i+1, node.children.get(char))
        }

        return dfs(0, this.root)
    }
}
