// Contiguous Array
// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:
// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50,000.

/**
 * @param {number[]} nums
 * @return {number}
 */
export default function (nums) {
  //find 1,0 combinations until I can't delete any more pairs or nums is empty
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] + nums[i+1] == 1)
      nums.splice(i, 2, -1);
  }
  var subGroups = [];
  var innerCount = 0;
  for (let i = nums.length-1; i >= 0; i--) {
    if(nums[i] == -1){
      innerCount++;
    } else{
      if(innerCount > 0){
        nums.splice(i+1, innerCount, -1 * innerCount);
        subGroups.push({index: i+1, count: -1 * innerCount});
        innerCount = 0;
      }
    }
  }

  subGroups.sort((a,b)=> a.count - b.count);
  for (let i = 0; i < subGroups.length; i++) {
    //check left side and right side and if they add up to 1, remove 1
    let element = subGroups[i];
    if(nums[element.index-1] + nums[element.index+1] == 1){
      element.count -= 1;
      nums.splice(element.index-1, 3,element.count)
    }
  }
};