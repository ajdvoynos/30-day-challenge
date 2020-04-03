/**
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

Example 2:

Input: [4,1,2,1,2]
Output: 4

 */
export default function singleNumber(nums) {
  
  var numbers = new Map();
  for(var i = 0; i < nums.length; i++){
      if(numbers.get(nums[i]) == undefined){
          numbers.set(nums[i], 0) ;
      }else{
          numbers.set(nums[i], 2);
      }
  }
  for (let [key, value] of numbers) {
      if(value == 0){
        return key;
      }
  }
};