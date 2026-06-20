class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = Array.from({length: numCourses}, () => [])
        const indegree = new Array(numCourses).fill(0)

        for(const [a,b] of prerequisites){
            adj[b].push(a)
            indegree[a]++
        }

        const queue = []

        for(let i=0; i<numCourses; i++){
            if(indegree[i] === 0) queue.push(i)
        }

        const order = []
        let head = 0;
        while(head < queue.length){
            const node = queue[head++]
            order.push(node)

            for(const next of adj[node]){
                if(--indegree[next] === 0) queue.push(next)
            }
        }


        return order.length === numCourses ? order : []
    }


}
