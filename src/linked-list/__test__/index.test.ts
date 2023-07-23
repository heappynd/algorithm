import { describe, expect, it } from 'vitest'
import { List } from '..'

describe.only('linked-list', () => {
  it('List', () => {
    const list = new List()
    expect(list).toMatchSnapshot()

    list.insertAt(0, 100)
    expect(list).toMatchSnapshot()
    list.insertAt(1, 200)
    expect(list).toMatchSnapshot()
    list.insertAt(0, 50)
    expect(list).toMatchSnapshot()

    list.removeAt(0)
    expect(list).toMatchSnapshot()

    list.removeAt(1)
    expect(list).toMatchSnapshot()
  })
})
