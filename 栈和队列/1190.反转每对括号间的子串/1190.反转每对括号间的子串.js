/**
 * @param {string} s
 * @return {string}
 */
 var reverseParentheses = function(s) {
  let stack = [];
  let str = '';
  for (let i = 0; i < s.length; i++) {
      let item = s[i];
      if (item === '(') {
          stack.push(str);
          str = '';
      } else if (item === ')') {
          str = str.split('').reverse().join('');
          str = stack.pop() + str;
      } else {
          str += item
      }
  }
  return str;
};