// 方法一
/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
  let h = triangle.length;
  let dp = new Array(h).fill(0).map((_, i) => new Array(triangle[i].length));
  for (let i = h - 1; i >= 0; i--) {
      for (let j = 0; j < triangle[i].length; j++) {
          if (i === h - 1) {
              dp[i][j] = triangle[i][j];
          } else {
              dp[i][j] = Math.min(dp[i+1][j], dp[i+1][j+1]) + triangle[i][j];
          }
      }
  }
  return dp[0][0];
};
// 方法二
/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
  let dp = triangle[triangle.length - 1];
  for (let i = dp.length - 2; i >= 0; i--) {
      for (let j = 0; j < triangle[i].length; j++) {
          dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
      }
  }
  return dp[0];
};