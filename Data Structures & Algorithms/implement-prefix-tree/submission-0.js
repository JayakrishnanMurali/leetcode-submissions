class TrieNode {
    constructor(){
        this.children = new Map()
        this.isEnd = false;
    }
}

class PrefixTree {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;

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
        let curr = this.root

        for(const char of word){
            if(!curr.children.has(char)) return false;
            curr = curr.children.get(char)
        }

        return curr.isEnd
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;

        for(const char of prefix){
            if(!curr.children.has(char)) return false;
            curr= curr.children.get(char)
        }

        return true
    }
}
