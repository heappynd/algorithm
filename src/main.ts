import { List } from './linked-list'

let list = new List()


list.insertAt(0, 111)
list.insertAt(1, 222)
list.insertAt(2, 333)

console.log('list', list)
console.log(list.findIndex(2))

list.forEach((v) => {
  console.log(v)
})
