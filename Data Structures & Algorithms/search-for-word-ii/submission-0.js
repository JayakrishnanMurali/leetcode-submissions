class TrieNode {
    constructor(){
        this.children = new Map()
        this.word = null
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const root = new TrieNode()

        for(const word of words){
            let node = root;

            for(const char of word){
                if(!node.children.has(char)){
                    node.children.set(char, new TrieNode())
                }

                node = node.children.get(char)
            }

            node.word = word
        }

        const rows = board.length
        const cols = board[0].length

        const res = []

        function dfs(r,c,node){
            if(r < 0 || c < 0 || r >= rows || c>= cols) return;

            const char = board[r][c]

            if(char === '#' || !node.children.has(char)) return

            const nextNode = node.children.get(char)

            if(nextNode.word !== null){
                res.push(nextNode.word)
                nextNode.word = null
            }

            board[r][c] = "#"

            dfs(r+1,c, nextNode)
            dfs(r-1,c, nextNode)
            dfs(r, c+1, nextNode)
            dfs(r, c-1, nextNode)

            board[r][c] = char
        } 

        for(let i=0; i<rows; i++){
            for(let j=0; j<cols; j++){
                dfs(i,j,root)
            }
        }

        return res;
    }
}
