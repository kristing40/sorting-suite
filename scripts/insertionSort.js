function insertionSort (array) {
//create an array of items
//create outer for loop to iterate over the array
//target 1st item in array as base
//look at next item in array and if less than base item
//move next item in front of the key array
// or insert it where it needs to be inserted in the sorted side

  for (var i = 0; i < array.length; i++) {

    for (var j = i; j >= 0; j--) {

      if (array[j + 1 ] < array[j]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]]

      }

    }

  }
  return array
}


export default insertionSort;
