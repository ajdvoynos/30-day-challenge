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
  if(!nums.length) return 0;

  var nums2 = [...nums].reverse();
  return Math.max(maximumLength(nums), maximumLength(nums2));
  
  function maximumLength(array){  
    //find 1,0 combinations and replace them with -1's
    for (let i = 0; i < array.length; i++) {
      if (array[i] + array[i + 1] == 1)
      array.splice(i, 2, -1);
    }
  
    var elToExpand;
    do {
      //find adjacent negative numbers and add them together 
      var adjacentSum = 0;
      var adjacentCount = 0;
      for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] < 0){
          adjacentSum += array[i];
          adjacentCount += 1;
        } 
        
        if (array[i - 1] == undefined && adjacentSum != 0 || array[i - 1] >= 0 && adjacentSum != 0) {
          array.splice(i, adjacentCount, adjacentSum);
          adjacentSum = 0;
          adjacentCount = 0;
        }
      }
      var negativeNumbers = array.reduce((acc,curr,index) => {
        if(curr < 0) acc.push({index: index, count: curr});
        return acc;
      }, []);

      negativeNumbers.sort((a, b) => a.count - b.count);
      //Find the first(largest) subarray that can be expanded (with a 1 and 0 on each side)
      elToExpand = negativeNumbers.find(element => array[element.index - 1] + array[element.index + 1] == 1);
      if (elToExpand) {
        //Expand the largest subarray
        array.splice(elToExpand.index - 1, 3, elToExpand.count - 1);
      }
    } while (elToExpand);
  
    var result = Math.min(...array);
    return result > 0 ? 0 : result * -2
  }
  
};