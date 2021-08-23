/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
  let low = 0;
  let height = x;
  let ans = -1;
  while (low <= height) {
      let mid = low + Math.floor((height - low) / 2);
      if (mid * mid <= x) {
          ans = mid;
          low = mid + 1;
      } else {
          height = mid - 1;
      }
  }
  return ans;
};