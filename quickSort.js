function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
  }

  let pivotValue = arr[start];
  let swapIndex = start;

  //put all values that are less than the pivot value directly to the right of it in the array.
  for (let i = start + 1; i < arr.length; i++) {
    if (pivotValue > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  //move the pivot value to the right of all values smaller than it. so the pivot value is now in its correct location in the array.
  swap(arr, start, swapIndex);

  console.log(arr);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  //base case
  if (right <= left) return arr;

  //decide on a pivot point and put it into its correct position in the array.
  let pivotIndex = pivot(arr, left, right);

  //sort the values to the left of the pivot. recursively calls this function so the whole left side will end up sorted.
  quickSort(arr, left, pivotIndex - 1);

  //sort the values to the right of the pivot recursively calls this function so the whole right side will end up sorted.
  quickSort(arr, pivotIndex + 1, right);
}

//time complexity

//O(log n) to break the array down into smaller arrays via pivot points
//O(n) comparisons to sort the array
//best case = O(n log n)
//worst case = O(n2) can be quadratic time if the pivot points are poorly chosen and don't actually sort anything. This would require running the algorithm for every value in the array.
