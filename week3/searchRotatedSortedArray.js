// Search in Rotated Sorted Array
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export default function (nums, target) {
  return pivotedBinarySearch(0, nums.length - 1);

  function pivotedBinarySearch(start, end) {
    if (end - start < 2) {
      if (nums[start] == target) return start;
      if (nums[end] == target) return end;
      else return -1;
    }
    var middleIndex = Math.floor((start + end) / 2);
    var middleNumber = nums[middleIndex];
    if (middleNumber == target) return middleIndex;

    if (target < middleNumber) {
      var startNumber = nums[start];
      if (startNumber == target) return start;
      if (startNumber < middleNumber) {
        //regular binary left side
        if (target > startNumber) return pivotedBinarySearch(start + 1, middleIndex - 1);
        //pivoted binary right side
        return pivotedBinarySearch(middleIndex + 1, end);
      } else {
        return pivotedBinarySearch(start + 1, middleIndex - 1);
      }
    } else if (target > middleNumber) {

      var endNumber = nums[end];
      if (endNumber == target) return end;
      if (middleNumber < endNumber) {
        //regular binary right side
        if (target < endNumber) return pivotedBinarySearch(middleIndex + 1, end - 1);
        //pivoted binary left side
        return pivotedBinarySearch(start, middleIndex - 1);
      } else {
        return pivotedBinarySearch(middleIndex + 1, end - 1);
      }
    }
  }
  // function regularBinarySearch(start, end) {
  //   var middleIndex = Math.floor((start + end) / 2);
  //   if (end - start < 2) {
  //     if (nums[start] == target) return start;
  //     if (nums[end] == target) return end;
  //     else return -1;
  //   }
  //   if (target == nums[middleIndex]) return middleIndex;
  //   if (target < nums[middleIndex]) return regularBinarySearch(start, middleIndex - 1);
  //   else return regularBinarySearch(middleIndex + 1, end);
  // }

};