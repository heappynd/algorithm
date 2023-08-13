/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

import { TreeNode } from './definition.js'

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) {
    return null
  }
  let maxIdx = 0
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (max < nums[i]) {
      max = nums[i]
      maxIdx = i
    }
  }
  const tree = new TreeNode(max)
  tree.left = constructMaximumBinaryTree(nums.slice(0, maxIdx))
  tree.right = constructMaximumBinaryTree(nums.slice(maxIdx + 1))
  return tree
}

var constructMaximumBinaryTree = function (nums) {
  return build(nums, 0, nums.length - 1)
}

function build(nums, low, high) {
  if (high < low) {
    return null
  }
  let maxIdx = -1
  let max = Number.MIN_SAFE_INTEGER
  for (let i = low + 1; i <= high; i++) {
    if (max < nums[i]) {
      max = nums[i]
      maxIdx = i
    }
  }
  const tree = new TreeNode(max)
  tree.left = build(nums, low, maxIdx - 1)
  tree.right = build(nums, maxIdx + 1, high)

  return tree
}
