class Node {
  parent: Node | null = null
  left: Node | null = null
  right: Node | null = null
  data: number

  constructor(data: number) {
    this.data = data
  }
}

export class Tree {
  root: Node | null = null
  private _size = 0

  private _insertLeft = false

  insert(data: number) {
    let dir = (this._insertLeft = !this._insertLeft)
    function insertIt(node: Node, data: number) {
      if (node.data === data) {
        return false
      } else if (!node.left) {
        node.left = new Node(data)
        node.left.parent = node
        return true
      } else if (!node.right) {
        node.right = new Node(data)
        node.right.parent = node
        return true
      } else {
        if (dir === true) {
          return insertIt(node.left, data)
        } else {
          return insertIt(node.right, data)
        }
      }
    }
    let ret = false
    if (!this.root) {
      this.root = new Node(data)
      ret = true
    } else {
      ret = insertIt(this.root, data)
    }
    if (ret) {
      this._size++
    }
    return ret
  }

  find(data: number): Node | null {
    let ret: Node | null = null
    function findIt(node: Node | null, data: number) {
      if (node) {
        if (node.data === data) {
          ret = node
        } else {
          findIt(node.left, data)
          findIt(node.right, data)
        }
      }
    }

    findIt(this.root, data)
    return ret
  }

  remove(data: number) {
    let node = this.find(data)
    if (node) {
      this._size--
      if (node === this.root) {
        this.root = null
        return true
      }
      let left = node.left
      let right = node.right
      let parent = node.parent
      let isLeft = parent && parent.left === node

      if (!left && !right) {
        // 没有孩子节点
        if (isLeft) {
          parent!.left = null
        } else {
          parent!.right = null
        }
      } else if (left && !right) {
        // 只有左孩子节点
        if (isLeft) {
          parent!.left = left
        } else {
          parent!.right = left
        }
        left.parent = parent
      } else if (right && !left) {
        // 只有右孩子节点
        if (isLeft) {
          parent!.left = right
        } else {
          parent!.right = right
        }
        right.parent = parent
      } else if (left && right) {
        // 两个孩子节点
        let child = right
        while (child.left) {
          child = child.left
        }
        node.data = child.data // 复制后继节点的值到当前节点
        this.remove(node.data) // 删除后继节点
      }
    }
  }
}
