// 深度优先遍历
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  let res = [];
  const dfs = (root, level) => {
      if (!root) return;
      if (!res[level]) {
          res[level] = [root.val];
      } else {
          res[level].push(root.val);
      }
      for (const child of root.children) {
          dfs(child, level + 1)
      }
  }
  dfs(root, 0);
  return res;
};
// 广度优先遍历
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  let res = [];
  const bfs = (root, level) => {
      if (!root) return;
      let queue = [[root, 0]];
      while(queue.length) {
          let len = queue.length;
          while(len--) {
              const [node, level] = queue.shift();
              if (!res[level]) {
                  res[level] = [node.val];
              } else {
                  res[level].push(node.val);
              }
              for (const child of node.children) {
                  queue.push([child, level + 1]);
              }
          }
      }
  }
  bfs(root);
  return res;
};