/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
  let p1 = 0;
  let p2 = 0;
  while (p1 < t.length) {
      if (t[p1] === s[p2]) {
          p1++;
          p2++;
      } else {
          p1++;
      }
  }
  if (p2 === s.length) {
      return true;
  }
  return false;
};