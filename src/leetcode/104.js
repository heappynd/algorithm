import { TreeNode } from './definition.js'

var res = 0
var depth = 0

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) {
    return 0
  }
  let leftMax = maxDepth(root.left)
  let rightMax = maxDepth(root.right)

  let res = Math.max(leftMax, rightMax) + 1
  return res
}

/**
 *
 * @param {TreeNode} root
 */
function traverse(root) {
  if (root === null) {
    return
  }
  depth++
  if (root.left === null && root.right === null) {
    res = Math.max(depth, res)
  }
  traverse(root.left)
  traverse(root.right)
  depth--
}

const t = new TreeNode(3)
t.left = new TreeNode(9)
t.right = new TreeNode(20)
t.right.left = new TreeNode(15)
t.right.right = new TreeNode(7)

// const t = new TreeNode(1)
// t.right = new TreeNode(2)

console.log(maxDepth(t))

var count = function (root) {
  if (root === null) {
    return 0
  }
  var leftCount = count(root.left)
  var rightCount = count(root.right)
  // 后序位置
  // prettier-ignore
  console.log("节点 " + root.val + " 的左子树有 " + leftCount + " 个节点，右子树有 " + rightCount + " 个节点");

  return leftCount + rightCount + 1
}

count(t)
