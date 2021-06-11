/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
  let pathArr = path.split('/');
  let stack = [];
  for (let i = 0; i < pathArr.length; i++) {
      if (pathArr[i] === '..') {
          stack.pop();
      } else if (pathArr[i] !== '' && pathArr[i] !== '.') {
          stack.push(pathArr[i]);
      }
  }
  
  return '/' + stack.join('/');
};