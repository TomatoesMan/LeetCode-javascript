/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
  let stack1 = [];
  let stack2 = [];
  let str = '';
  let cur = 0;
  for (let i = 0; i < s.length; i++) {
      let item = s[i];
      if (item >= '0' && item <= '9') {
          cur = cur*10 + (item - '0');
      } else if (item === '[') {
          stack2.push(str);
          stack1.push(cur);
          str = '';
          cur = 0;
      } else if (item === ']') {
          let length = stack1.pop() - 1;
          let str1 = str;
          for (let j = 0; j < length; j++) {
              str += str1;
          }
          str1 = '';
          str = stack2.pop() + str;
      } else {
          str += item;
      }
  }
  return str;
};