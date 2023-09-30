function reverseNumber(number) {
    let reversedNumber = 0;
    while (number > 0) {
      var remainder = number % 10;
      reversedNumber = reversedNumber * 10 + remainder;
      number = Math.floor(number / 10);
    }
    return reversedNumber;
  }
  var num = 32243;
  var reversedNumber = reverseNumber(num);
  
  console.log(reversedNumber);
  
  