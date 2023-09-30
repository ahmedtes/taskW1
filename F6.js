
function sortArray(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] > array[j]) {
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  }
  var nums = [5, 2, 3, 1, 4];
   sortedNumbers = sortArray(nums);
  console.log(sortedNumbers);

