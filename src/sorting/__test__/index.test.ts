import { describe, it, expect } from 'vitest'
import { bubbleSort1 } from '../bubbleSort'

describe('sort', () => {
  it('should correctly sort an array of numbers', () => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
    const expectedOutput = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

    const sortedArray = bubbleSort1(input)

    expect(sortedArray).toEqual(expectedOutput)
  })

  it('should correctly sort a large array of numbers', () => {
    const input = []
    const n = 1000
    for (let i = 0; i < n; i++) {
      input.push(Math.random())
    }
    const expectedOutput = [...input].sort((a, b) => a - b)

    const sortedArray = bubbleSort1(input)

    expect(sortedArray).toEqual(expectedOutput)
  })

  it('should return an empty array if the input is empty', () => {
    const input: number[] = []
    const sortedArray = bubbleSort1(input)
    expect(sortedArray).toEqual([])
  })

  it('should correctly sort a single-element array', () => {
    const input = [42]
    const sortedArray = bubbleSort1(input)
    expect(sortedArray).toEqual(input)
  })

  it('should correctly sort a completely sorted array', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const sortedArray = bubbleSort1(input)
    expect(sortedArray).toEqual(input)
  })

  it('should correctly sort a partially sorted array', () => {
    const input = [1, 3, 2, 5, 4, 7, 6, 9, 8, 10]
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const sortedArray = bubbleSort1(input)
    expect(sortedArray).toEqual(expectedOutput)
  })

  it('should correctly sort a completely unsorted array', () => {
    const input = [9, 1, 7, 3, 5, 2, 8, 4, 10, 6]
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const sortedArray = bubbleSort1(input)
    expect(sortedArray).toEqual(expectedOutput)
  })
})
