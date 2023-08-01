export class UnionFind {
  size: number
  parents: number[]

  constructor(size: number) {
    // 表示当前还有多少个小组
    this.size = size
    this.parents = new Array(size)

    for (let i = 0; i < size; i++) {
      this.parents[i] = i
    }
  }

  // 查看元素属于哪个集合
  query(element: number) {
    return this.parents[element]
  }

  // 合并集合
  merge(a: number, b: number) {
    const p1 = this.query(a)
    const p2 = this.query(b)
    // 如果这两个元素不在同一个集合中，那么就把它们合并
    if (p1 !== p2) {
      this.size--
      for (let i = 0; i < this.size; i++) {
        if (this.parents[i] === p1) {
          this.parents[i] = p2
        }
      }
    }
  }

  query2(element: number) {
    const p = this.parents
    while (element !== p[element]) {
      element = p[element]
    }
    return element
  }

  merge2(a: number, b: number) {
    const p1 = this.query(a)
    const p2 = this.query(b)
    // 如果这两个元素不在同一个集合中，那么将其中一个“老大”的值改写为另一个“老大”的值
    if (p1 !== p2) {
      this.size--
      this.parents[p1] = p2
    }
  }

  isConnected(a: number, b: number) {
    return this.query(a) === this.query(b)
  }

  toString() {
    return this.parents.join(' ')
  }
}
