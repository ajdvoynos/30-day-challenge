/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var maxConsecutive = 0;
    var currentCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]==1){
            currentCount++;
        } else{
            maxConsecutive = Math.max(maxConsecutive, currentCount);
            currentCount = 0;
        }
    }
    return Math.max(maxConsecutive, currentCount);
};

export default findMaxConsecutiveOnes;