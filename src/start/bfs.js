import { TreeNode } from './definition.js'
import { t } from './example.js'

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var bfs = function (root) {
  if (root == null) {
    return
  }
  let q = [root]

  while (q.length !== 0) {
    let node = q.shift()
    console.log('node', node.val)
    if (node.left !== null) {
      q.push(node.left)
    }
    if (node.right !== null) {
      q.push(node.right)
    }
  }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root == null) {
    return
  }
  let q = [root]

  while (q.length !== 0) {
    // 在每一层遍历开始前，先记录队列中的结点数量
    // n（也就是这一层的结点数量），然后一口气处理完这一层的 n 个结点。
    let n = q.length
    console.log(q);
    // let node = q.shift()
    for (let i = 0; i < n; i++) {
      let node = q.shift()
      // console.log('node', node.val)
      if (node.left !== null) {
        q.push(node.left)
      }
      if (node.right !== null) {
        q.push(node.right)
      }
    }
  }
}

// console.log(t);
levelOrder(t)
