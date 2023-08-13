/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) {
    return root
  }
  const queue = [root]

  while (queue.length > 0) {
    const size = queue.length
    let prev = null
    for (let i = 0; i < size; i++) {
      let node = queue.shift()

      // main
      if (prev !== null) {
        prev.next = node
      }
      prev = node
      // if (i < size - 1) {
      //   node.next = queue[0]
      // }
      // main

      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }
    }
  }
}
