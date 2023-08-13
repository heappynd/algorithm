/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

import { TreeNode } from './definition'

/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  const idxMap = new Map()

  for (let i = 0; i < postorder.length; i++) {
    idxMap.set(postorder[i], i)
  }

  function build(preorder, preStart, preEnd, postorder, postStart, postEnd) {
    if (preStart > preEnd) {
      return null
    }

    const rootVal = preorder[preStart]
    const leftRootVal = preorder[preStart + 1]
    // leftRootVal 在后序遍历数组中的索引
    const index = idxMap.get(leftRootVal)
    // 左子树的元素个数
    const leftSize = index - postStart + 1

    const root = new TreeNode(rootVal)
    root.left = build(
      preorder,
      preStart + 1,
      preStart + leftSize,
      postorder,
      postStart,
      index
    )
    root.right = build(
      preorder,
      postStart + leftSize + 1,
      preEnd,
      postorder,
      index + 1,
      postEnd - 1
    )

    return root
  }

  return build(
    preorder,
    0,
    preorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  )
}
