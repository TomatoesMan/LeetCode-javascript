/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  let map = new Map();
  for (let s of ransomNote) {
      let val = map.get(s);
      map.set(s, val ? val + 1 : 1);
  }
  for (let t of magazine) {
      if (map.has(t)) {
          let val = map.get(t) - 1;
          if (val) {
              map.set(t, val)
          } else {
              map.delete(t);
          }
      }
  }
  return !map.size;
};