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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null
  }

  const root = preorder[0]
  for (let i = 0; i < inorder.length; i++) {
    if (root === inorder[i]) {
      break
    }
  }
  const tree = new TreeNode(root)
  tree.left = buildTree(preorder.slice(1, 1 + i), inorder.slice(0, i))
  tree.right = buildTree(preorder.slice(1 + i), inorder.slice(i + 1))

  return tree
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const valToIndex = new Map()
  for (let i = 0; i < inorder.length; i++) {
    valToIndex.set(inorder[i], i)
  }
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
}

function build(preorder, preStart, preEnd, inorder, inStart, inEnd) {
  if (preStart > preEnd || inStart > inEnd) {
    return null
  }
  const rootVal = inorder[inStart]
  const index = valToIndex[rootVal]
  const leftSize = index - inStart
  const root = new TreeNode(rootVal)
  root.left = build(
    preorder,
    preStart + 1,
    preStart + leftSize,
    inorder,
    inStart,
    index - 1
  )
  root.right = build(
    preorder,
    preStart + leftSize + 1,
    preEnd,
    inorder,
    index + 1,
    inEnd
  )

  return root
}
