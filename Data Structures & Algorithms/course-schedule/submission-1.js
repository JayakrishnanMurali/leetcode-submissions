class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = Array.from({length: numCourses}, () => [])
        for(const [a,b] of prerequisites){
            adj[a].push(b)
        }

        const state = new Array(numCourses).fill(0)

        function hasCycle(node){
            if(state[node] === 1) return true;
            if(state[node] === 2) return false;

            state[node] = 1;

            for(const next of adj[node]){
                if(hasCycle(next)) return true;
            }

            state[node] = 2;
            return false
        }

        for(let i=0; i<numCourses; i++){
            if (hasCycle(i)) return false;
        }

        return true;
    }
}
