/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
  let stack = [];
  let res = [...s];
  for (let i = 0; i < s.length; i++) {
      let item = s[i];
      if (item === '(') {
          stack.push(i);
      } else if (item === ')') {
          if (stack.length) {
              stack.pop();
          } else {
              delete res[i];
          }
      } 
  }
  while(stack.length) {
      delete res[stack.pop()];
  }
  res = res.filter(item => item);
  return res.join('');
};