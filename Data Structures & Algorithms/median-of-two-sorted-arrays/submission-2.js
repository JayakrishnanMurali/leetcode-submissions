class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        if(nums1.length > nums2.length){
            [nums1, nums2] = [nums2, nums1]
        }

        const total = nums1.length + nums2.length
        const half = Math.floor((total + 1) / 2)

        let left = 0, right = nums1.length;

        while(left <= right){
            const cut1 = Math.floor((left + right) / 2)
            const cut2 = half - cut1

            const left1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1]
            const right1 = cut1 === nums1.length ? Infinity : nums1[cut1]

            const left2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1]
            const right2 = cut2 === nums2.length ? Infinity : nums2[cut2]

            if(left1 <= right2 && left2 <= right1) {
                if(total % 2 === 1) return Math.max(left1, left2)
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2
            }

            if(left1 > right2) right = cut1 - 1
            else left = cut1 + 1
        }
    }
}
