function quickSort(array) {
  let sortLeft = [];
  let sortRight = [];
  let pivot = array[0];

  if (array.length < 2) {
    return array;
  }

  for (let i = 1; i < array.length; i++) {
    (pivot > array[i])  ? sortLeft.push(array[i]) :
      sortRight.push(array[i])
  }

  return [...quickSort(sortLeft), pivot, ...quickSort(sortRight)];
}

export default quickSort;
