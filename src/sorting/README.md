# README

## 推理

```ts
function swap<T>(array: T[], a: number, b: number) {
  let temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

function bubbleSort1(array: number[]) {
  for (let j = 0; j < array.length - 1; j++) {
    if (array[j] > array[j + 1]) {
      swap(array, j, j + 1)
    }
  }
  for (let j = 0; j < array.length - 2; j++) {
    if (array[j] > array[j + 1]) {
      swap(array, j, j + 1)
    }
  }
  for (let j = 0; j < array.length - 3; j++) {
    if (array[j] > array[j + 1]) {
      swap(array, j, j + 1)
    }
  }
  for (let j = 0; j < array.length - 4; j++) {
    if (array[j] > array[j + 1]) {
      swap(array, j, j + 1)
    }
  }
  for (let j = 0; j < array.length - 5; j++) {
    if (array[j] > array[j + 1]) {
      swap(array, j, j + 1)
    }
  }
  for (let j = 0; j < array.length - 6; j++) {
    if (array[j] > array[j + 1]) {
      swap(array, j, j + 1)
    }
  }
}
```
