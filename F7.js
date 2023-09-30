

function isPalindrome(word) {
    word = word.toLowerCase();
    for (let i = 0, j = word.length - 1; i < j; i++, j--) {
      if (word[i] !== word[j]) {
        return false;
      }
    }
    return true;
  }
  var word = 'noon';
  var isPalindromeResult = isPalindrome(word);
  console.log(isPalindromeResult);
  
