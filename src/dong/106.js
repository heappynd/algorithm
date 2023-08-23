/**
 * @param {number[]} inOrder
 * @param {number[]} postOrder
 * @return {TreeNode}
 */
var buildTree = function (inOrder, postOrder) {
  function build(inOrder, inStart, inEnd, postOrder, postStart, postEnd) {
    // base case
    if (postStart > postEnd) {
      return null
    }
    let rootVal = postOrder[postEnd]
    let rootInOrderIdx = inOrder.indexOf(rootVal)
    let leftSize = rootInOrderIdx - inStart
    let root = new TreeNode(rootVal)
    root.left = build(
      inOrder,
      inStart,
      rootInOrderIdx - 1,
      postOrder,
      postStart,
      postStart + leftSize - 1
    )
    root.right = build(
      inOrder,
      rootInOrderIdx + 1,
      inEnd,
      postOrder,
      postStart + leftSize,
      postEnd - 1
    )

    return root
  }

  return build(
    inOrder,
    0,
    inOrder.length - 1,
    postOrder,
    0,
    postOrder.length - 1
  )
}
