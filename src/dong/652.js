function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const subTrees = new Map()
  const res = []

  function serialize(root) {
    if (root === null) {
      return '#'
    }
    const left = serialize(root.left)
    const right = serialize(root.right)

    const myself = left + ',' + right + ',' + root.val

    const freq = subTrees.get(myself) ?? 0
    if (freq === 1) {
      res.push(root)
    }
    subTrees.set(myself, freq + 1)

    return myself
  }
  serialize(root)
  return res
}

const t = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3))

findDuplicateSubtrees(t)
