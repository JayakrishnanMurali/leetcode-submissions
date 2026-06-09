class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        //sentinal
        heights.push(0)

        let max = 0;
        let stack = [] // stores increasing heights idx

        for(let i=0; i<heights.length; i++){
            while(stack.length &&
                heights[i] < heights[stack[stack.length - 1]]
            ){
                const topIdx = stack.pop()
                const height = heights[topIdx]
                const rightBoundary = i;
                const leftBoundary = stack.length > 0 ? stack[stack.length - 1] : -1;

                const width = rightBoundary - leftBoundary - 1;

                const area = height * width

                max = Math.max(max, area)
            }

            stack.push(i)
        }

        heights.pop()

        return max;
    }
}
