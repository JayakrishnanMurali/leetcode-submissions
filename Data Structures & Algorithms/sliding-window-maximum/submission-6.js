class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0;
        const max = []
        const deque = []

        for(let right = 0; right < nums.length; right++){
            while(nums[deque[deque.length - 1]] < nums[right]){
                deque.pop()
            }

            deque.push(right)

            if(deque[0] < left){
                deque.shift()
            }

            if(right - left + 1 === k){
                max.push(nums[deque[0]])
                left++
            }

        }

        return max
    }
}
