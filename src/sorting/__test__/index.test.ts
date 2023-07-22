import { describe, expect, it } from 'vitest'
import { bubbleSort1, cocktailSort } from '../bubbleSort'
import {
  insertSort1,
  insertSort2,
  insertSort3,
  shellSort,
  shellSort2,
  shellSort3,
} from '../insertSort'
// import { mergeSort } from '../mergeSort'
import {
  mergeSortObject,
  mergeSortObject2,
  mergeSortSimple,
} from '../mergeSortObject'

describe('sorting', () => {
  it.each([
    bubbleSort1,
    cocktailSort,
    insertSort1,
    shellSort,
    shellSort2,
    shellSort3,
    mergeSortObject,
    mergeSortObject2,
    mergeSortSimple,
  ])('should correctly sort an array of numbers %o', (sortFn) => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const expectedOutput = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

    sortFn(input)

    expect(input).toEqual(expectedOutput)
  })
})

describe('sorting with', () => {
  it('insertSort2', () => {
    const input = [0, 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const expectedOutput = [0, 1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

    expect(insertSort2(input).slice(1)).toEqual(expectedOutput.slice(1))
  })

  it('insertSort3', () => {
    const input = [0, 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const expectedOutput = [0, 1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

    expect(insertSort3(input).slice(1)).toEqual(expectedOutput.slice(1))
  })
})
