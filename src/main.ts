import { UnionFind } from './union-find'

const u = new UnionFind(10)

console.log(u)

console.log(u.query(2))

u.merge(5, 6)
u.merge(1, 2)
u.merge(2, 3)
u.merge(1, 4)
u.merge(1, 5)

console.log('u', u)
