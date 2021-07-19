/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
      let val = map.get(s[i]);
      map.set(s[i], val ? val + 1 : 1);
  }
  for(let i = 0; i < t.length; i++) {
      if (!map.has(t[i]) || !map.get(t[i])) {
         return t[i];
      } else {
          let val = map.get(t[i]);
          map.set(t[i], val - 1);
      }
  }
};