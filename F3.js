
function countVowels(s) {
    let vowelCount = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
        vowelCount++;
      }
    }
    return vowelCount;
  }
  var s = 'The quick brown fox';
  var vowelCount = countVowels(s);
  console.log(vowelCount);

