/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  function construct(
    preOrder,
    preStart,
    preEnd,
    postOrder,
    postStart,
    postEnd
  ) {
    if (preStart > preEnd) {
      return null
    }
    if (preStart == preEnd) {
      return new TreeNode(preOrder[preStart])
    }

    const rootVal = preOrder[preStart]
    // ! 假设前序遍历的第1位为左子树的根节点
    // 我们假设前序遍历的第二个元素是左子树的根节点，
    // 但实际上左子树有可能是空指针，那么这个元素就应该是右子树的根节点。
    // 由于这里无法确切进行判断，所以导致了最终答案的不唯一。
    const leftRootVal = preOrder[preStart + 1]

    const leftRootPostOrderIdx = postOrder.indexOf(leftRootVal)
    const leftSize = leftRootPostOrderIdx - postStart + 1
    const root = new TreeNode(rootVal)
    root.left = construct(
      preOrder,
      preStart + 1,
      preStart + leftSize,
      postOrder,
      postStart,
      leftRootPostOrderIdx
    )
    root.right = construct(
      preOrder,
      preStart + leftSize + 1,
      preEnd,
      postOrder,
      leftRootPostOrderIdx + 1,
      postEnd - 1
    )

    return root
  }

  return construct(
    preorder,
    0,
    preorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  )
}
