/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 var findLongestWord = function(s, dictionary) {
  dictionary.sort((a, b) => {
      if (a.length !== b.length) return b.length - a.length;
      return a < b ? -1 : 1;
  })
  for (const str of dictionary) {
      if (str.length > s.length) continue;
      let p1 = 0;
      let p2 = 0;
      while (p2 < s.length) {
          if (str[p1] === s[p2]) {
              p1++;
              p2++;
          } else {
              p2++;
          }
      }
      if (p1 === str.length) {
          return str;
      }
  }
  return '';
};