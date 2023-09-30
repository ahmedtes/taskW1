
function capitalWord(string) {
    var words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    var capitalString = words.join(' ');
    return capitalString;
  }
  var  inputString = 'the quick brown fox';
  var  capitalString = capitalWord(inputString);
  console.log(capitalString);
  


