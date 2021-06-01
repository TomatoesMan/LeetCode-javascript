/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
  let stack = [];
  let sum = 0;
  for (let i = 0; i < tokens.length; i++) {
      let token = tokens[i];
      if (isNumber(token)) {
          stack.push(+token);
      } else {
          let res1 = stack.pop();
          let res2 = stack.pop();
          sum = opMap[token](res1, res2);
          stack.push(sum);
      }
  }
  return stack[0];
};

let opMap = {
  '+': (a, b) => b + a,
  '-': (a, b) => b - a,
  '*': (a, b) => b * a,
  '/': (a, b) => parseInt(b / a, 10)
}

let isNumber = (token) => {
  return !('+' === token || '-' === token || '*' === token || '/' === token );
}