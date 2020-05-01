function mergeSort(arr) {
  //base case. stop breaking the array in half when it has 1 or 0 values in it
  if (arr.length <= 1) return arr;

  //keep breaking the array in half
  let midpoint = Math.floor(arr.length / 2);
  let leftHalf = mergeSort(arr.slice(0, midpoint));
  let rightHalf = mergeSort(arr.slice(midpoint, arr.length));

  //merge the sorted arrays back together
  return mergeSort(leftHalf, rightHalf);
}

function merge(arr1, arr2) {
  let results = [];
  let arr1Index = 0;
  let arr2Index = 0;

  //push smaller value onto results array until one array is empty
  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      results.push(arr1[arr1Index]);
      arr1Index++;
    }
  }

  //push the rest of the non-empy array into the results array
  while (arr1Index < arr1.length) {
    results.push(arr1[arr1Index]);
    arr1Index++;
  }
  while (arr2Index < arr2.length) {
    results.push(arr2[arr2Index]);
    arr2Index++;
  }

  return results;
}

//time complexity

//O(log n) breaking down array
//O(n) comparisons
//O(n log n) overall

//space complexity

//O(n) breaking down array into smallest arrays
