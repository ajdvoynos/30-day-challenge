// Single Element in a Sorted Array
// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

// Example 1:
// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2

// Example 2:
// Input: [3,3,7,7,10,11,11]
// Output: 10

// Note: Your solution should run in O(log n) time and O(1) space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  return binarySearch(0, nums.length);
  function binarySearch(start, end) {
    if (start > end) return -1;
    var middle = Math.floor((start + end) / 2);
    if (nums[middle] !== nums[middle - 1] && nums[middle] !== nums[middle + 1]) return nums[middle];

    if (middle % 2 === 0) {
      if(nums[middle] != nums[middle+1]){
        //search left
        return binarySearch(start, middle);
      }else{
        //search right
        return binarySearch(middle, end);
      }
    } else {
      if(nums[middle] != nums[middle-1]){
        //search left
        return binarySearch(start, middle);
      }else{
        //search right
        return binarySearch(middle, end);
      }
    }
  }
};

export default singleNonDuplicate;