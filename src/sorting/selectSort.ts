import { swap } from './utils'

/* function selectSort(array: number[]) {
  let minIndex = 0
  for (let i = 1; i < array.length; i++) {
    if (array[minIndex] > array[i]) {
      minIndex = i
    }
  }
  swap(array, minIndex, 0)

  minIndex = 1
  for (let i = 2; i < array.length; i++) {
    if (array[minIndex] > array[i]) {
      minIndex = i
    }
  }
  swap(array, minIndex, 1)

  minIndex = 2
  for (let i = 3; i < array.length; i++) {
    if (array[minIndex] > array[i]) {
      minIndex = i
    }
  }
  swap(array, minIndex, 2)

  minIndex = 3
  for (let i = 4; i < array.length; i++) {
    if (array[minIndex] > array[i]) {
      minIndex = i
    }
  }
  swap(array, minIndex, 3)

  console.log(array)
}

selectSort([5, 2, 1, 3, 4]) */

function selectSort(array: number[]) {
  for (let j = 0; j < array.length; j++) {
    let minIndex = j
    for (let i = j + 1; i < array.length; i++) {
      if (array[minIndex] > array[i]) {
        minIndex = i
      }
    }
    if (minIndex !== j) {
      swap(array, minIndex, j)
    }
  }

  //   console.log(array)
}

// selectSort([11, 5, 2, 1, 3, 4, 6])

export function selectSort2(array: number[]) {
  let min = 0
  let max = 0
  for (let i = 1; i < array.length; i++) {
    if (array[min] > array[i]) {
      min = i
    }
    if (array[max] > array[i]) {
      max = i
    }
  }
  swap(array, min, 0)
  swap(array, max, 6)
  // console.log(array)

  min = 1
  max = 1
  for (let i = 2; i < array.length - 1; i++) {
    if (array[min] > array[i]) {
      min = i
    }
    if (array[max] > array[i]) {
      max = i
    }
  }

  swap(array, min, 1)
  swap(array, max, 5)
  // console.log(array)

  return array
}
// selectSort2([11, 5, 2, 1, 3, 4, 6])
