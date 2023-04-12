function merge(array1, array2) {
  let i = 0;
  let j = 0;
  let k = 0;
  const resultArray = [];

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      resultArray[k] = array1[i];
      i++;
      k++;
    } else {
      resultArray[k] = array2[j];
      j++;
      k++;
    }
  }

  for (; i < array1.length; i++) {
    resultArray[k] = array1[i];
    k++;
  }
  for (; j < array2.length; j++) {
    resultArray[k] = array2[j];
    k++;
  }
  return resultArray;
}

function mergeSort(array) {
  //base case
  if (array.length < 2) {
    return array;
  } else {
    // recursive case

    // find middle
    let middle = Math.floor((0 + array.length - 1) / 2);
    console.log('middle:', middle);
    // left side
    let leftArray = array.slice(0, middle + 1);
    // right side
    let rightArray = array.slice(middle + 1, array.length);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
  }
}

const arr = [2, 1, 6, 5, 3, 9, 4, 8, 7];

console.log(mergeSort(arr));
