/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
  let left = 0, right = 0;
  let ans = '';
  let map = new Map();
  for (const item of t) {
      let val = map.get(item);
      map.set(item, val ? val + 1 : 1);
  }
  let mapSize = map.size;
  while (right < s.length) {
      if (map.has(s[right])) {
          map.set(s[right], map.get(s[right]) - 1);
          if (map.get(s[right]) === 0) { mapSize-- }
      }
      while (mapSize === 0) {
          let newStr = s.substring(left, right+1);
          if (!ans || newStr.length < ans.length) {ans = newStr};
          if (map.has(s[left])) {
              map.set(s[left], map.get(s[left]) + 1);
              if (map.get(s[left]) === 1) { mapSize++ }
          }
          left++;
      }
      right++;
  }
  return ans;
};