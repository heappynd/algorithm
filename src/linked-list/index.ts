export class Node {
  data: number
  next: Node | null

  constructor(data: number) {
    this.data = data
    this.next = null
  }
}

export class List {
  head: Node | null
  length: number

  constructor() {
    this.head = null
    this.length = 0
  }

  size() {
    return this.length
  }

  clear() {
    this.head = null
    this.length = 0
  }

  forEach(cb: (value: number, index: number) => void) {
    let node = this.head
    let i = 0
    while (node) {
      cb(node.data, i)
      node = node.next
      i++
    }
  }

  findIndex(index: number) {
    let i = 0
    let node = this.head

    while (node) {
      if (i === index) {
        return node
      }
      node = node.next
      i++
    }
    return null
  }

  insertAt(index: number, value: number) {
    if (index <= this.size()) {
      // const node = new Node(value)
      // if (index === 0 && this.head === null) {
      //   this.head = node
      //   node.next = null
      // } else {
      //   let prev = this.findIndex(index - 1)!
      //   let next = prev.next
      //   prev.next = node
      //   node.next = next
      // }
      // this.length++
      const node = new Node(value)
      if (index === 0) {
        if (this.head) {
          // index =0 但是 head有指向的
          node.next = this.head
          this.head = node
        } else {
          // index=0 且 head 不指向任何
          this.head = node
        }
      } else {
        let prev = this.findIndex(index - 1)!
        let next = prev.next
        prev.next = node
        node.next = next
      }

      this.length++
    } else {
      throw `${index}超出链表长度${this.size()}`
    }
  }

  removeAt(index: number) {
    if (this.head && index <= this.size()) {
      let prev = this.findIndex(index - 1)
      // 在界限里面 判断是一定存在的
      let curr = this.findIndex(index)!

      if (!prev) {
        // 表明移除的是第一位
        this.head = curr.next
      } else {
        prev.next = curr.next
      }

      this.length--
    } else {
      throw `${index}超出链表长度${this.size()}`
    }
  }
}

export class DoubleList {
  head = null
  tail = null
  length = 0

  size() {
    return this.length
  }
  clear() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  findIndex(index: number) {}
}
