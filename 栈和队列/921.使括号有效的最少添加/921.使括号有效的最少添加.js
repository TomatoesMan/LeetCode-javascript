/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
  if (!s.length) {return 0}
  let stack = [];
  for (let i = 0; i < s.length; i++) {
      let item = s[i];
      if (stack[stack.length - 1] === '(' && item === ')') {
          stack.pop();
      } else {
          stack.push(item);
      }
  }
  return stack.length;
};