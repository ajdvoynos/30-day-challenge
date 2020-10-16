// Replace Elements with Greatest Element on Right Side

// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

// Constraints:

// 1 <= arr.length <= 10^4
// 1 <= arr[i] <= 10^5

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    var max = 0;
    return arr.reduceRight((acc, curr, i)=> {
        var ret = (i == arr.length -1) ? -1 : max; //Return -1 for last element
        max = Math.max(curr, max);
        return acc.concat(ret);
    }, []).reverse();
};

export default replaceElements;