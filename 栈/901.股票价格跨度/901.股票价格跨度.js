var StockSpanner = function () {
  this.stack = [];
  this.prices = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let stack = this.stack;
  let prices = this.prices;
  this.prices.push(price);
  while (stack.length > 0 && prices[stack[stack.length - 1]] <= price) {
    stack.pop();
  }
  this.stack.push(prices.length - 1);
  if (stack.length === 1) {
    // 当栈中只有一个元素的时候，这个元素的下标 + 1 就是天数
    return stack[stack.length - 1] + 1;
  } else {
    // 栈中元素大于1的时候，栈顶两个元素下标之差就是天数
    return stack[stack.length - 1] - stack[stack.length - 2];
  }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
