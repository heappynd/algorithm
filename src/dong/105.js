/**
 * @param {number[]} preOrder
 * @param {number[]} inOrder
 * @return {TreeNode}
 */
var buildTree = function (preOrder, inOrder) {
  function build(preOrder, preStart, preEnd, inOrder, inStart, inEnd) {
    // !! base case
    if (preStart > preEnd) {
      return null
    }

    let rootVal = preOrder[preStart]

    let rootInOrderIdx = inOrder.findIndex((item) => item === rootVal)

    let root = new TreeNode(rootVal)

    let leftSize = rootInOrderIdx - inStart

    root.left = build(
      preOrder,
      preStart + 1,
      preStart + leftSize,
      inOrder,
      inStart,
      rootInOrderIdx - 1
    )
    root.right = build(
      preOrder,
      preStart + leftSize + 1,
      preEnd,
      inOrder,
      rootInOrderIdx + 1,
      inEnd
    )

    return root
  }

  return build(preOrder, 0, preOrder.length - 1, inOrder, 0, inOrder.length - 1)
}
