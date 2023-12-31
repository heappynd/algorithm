var find = function (root, val1, val2) {
  // base case
  if (root === null) {
    return null
  }
  // 前序位置，看看 root 是不是目标值
  if (root.val === val1 || root.val === val2) {
    return root
  }
  // 去左右子树寻找
  var left = find(root.left, val1, val2)
  var right = find(root.right, val1, val2)
  // 后序位置，已经知道左右子树是否存在目标值

  return left !== null ? left : right
}
