/**
 * @param {number[]} w 物品的重量集合
 * @param {number[]} v 物品的价值集合
 * @param {number} C 背包容量
 */

 var knapsack01 = function (w, v, C) {
  const n = w.length;
  if (n === 0) return 0;
  let dp = new Array(n);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(C + 1).fill(0);
  }
  for (let j = 0; j <= C; j++) {
    dp[0][j] = j > w[0] ? v[0] : 0;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= C; j++) {
      // 剩余空间的价值
      const restValue = dp[i - 1][j - w[i]];
      let pickNow = j >= w[i] ? v[i] + restValue : 0;
      let pickPrev = dp[i - 1][j];
      dp[i][j] = Math.max(pickNow, pickPrev);
    }
  }
  return dp[n - 1][C];
};