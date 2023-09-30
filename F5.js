
function findLargest(array) {
    let largestNumber = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largestNumber) {
        largestNumber = array[i];
      }
    }
    return largestNumber;
  }
  var numbers = [-5, -2, -6, 0, -1];
  var largestNumber = findLargest(numbers);
  console.log(largestNumber);


