//DIVIDE the problem into sub problemns
//CONQUER/Solve subproblems recursively
//if subproblems are small enough solve them as base cases
//COMBINE solutions for subproblems into original problem

function mergeSort(array) {
  if (array.length < 2)  {
    return array;
  }
  
  let middle = Math.floor(array.length / 2);
  let sortLeft = array.slice(0, middle);
  let sortRight = array.slice(middle, array.length);

  return merge(mergeSort(sortLeft), mergeSort(sortRight));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length)  {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }
  return result;
}


export default mergeSort;
