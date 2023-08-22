function levelTraverse(root) {
  if (root === null) {
    return
  }
  let q = []
  q.push(root)

  while (q.length) {
    const size = q.length
    for (let i = 0; i < size; i++) {
      const cur = q.shift()
      cur.left && q.push(cur.left)
      cur.right && q.push(cur.right)
    }
  }
}
