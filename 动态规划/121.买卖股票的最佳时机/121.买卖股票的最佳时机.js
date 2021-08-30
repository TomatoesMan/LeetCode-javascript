/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let preMax = 0;
  let preMin = prices[0];
  for (let i = 1; i < prices.length; i++) {
      preMax = Math.max(prices[i] - preMin, preMax);
      preMin = Math.min(prices[i], preMin);
  }
  return preMax;
};