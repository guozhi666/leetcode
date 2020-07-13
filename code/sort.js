/**
 * 
 */

function bubbleSor(arr) {
  if(arr.length <= 1) return arr;

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length-i-1; j++) {
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr;
}

function insertionSort(arr) {
  if(arr.length <= 1) return arr;

  for(let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j = i - 1;
    for(j; j >= 0; j--) {
      if(arr[j] > temp) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = temp
  }
  return arr;
}

function selectSort(arr) {
  if(arr.length <= 1) return arr;

  for(let i = 0; i < arr.length -1; i++) {
    let minIndex = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  return arr;
}

let arr = [3,5,97,12,64,78,43,9];
arr = [4, 8, 6, 3, 2, 1, 0, 12]

// console.log(bubbleSor(arr));
// console.log(insertionSort(arr));
console.log(selectSort(arr));