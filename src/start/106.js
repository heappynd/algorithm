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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const idxMap = new Map()
  inorder.forEach((value, index) => {
    idxMap.set(value, index)
  })
  return build(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1,
    idxMap
  )
}

function build(inorder, inStart, inEnd, postorder, postStart, postEnd, idxMap) {
  if (inStart > inEnd) {
    return null
  }
  const rootVal = postorder[postEnd]
  const root = new TreeNode(rootVal)
  const index = idxMap.get(rootVal)
  const leftSize = index - inStart
  root.left = build(
    inorder,
    inStart,
    index - 1,
    postorder,
    postStart,
    postStart + leftSize,
    idxMap
  )
  root.right = build(
    inorder,
    index + 1,
    inEnd,
    postorder,
    postStart + leftSize + 1,
    postEnd - 1,
    idxMap
  )

  return root
}
