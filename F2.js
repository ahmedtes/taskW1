
function Alphabetically(string) {
    var characters = string.split('');
    function compareCharacters(a, b) {
      return a.localeCompare(b);
    }
    characters.sort(compareCharacters);
    var sortedString = characters.join('');
    return sortedString;
  }
  var string = 'webmaster';
  var sortedString = Alphabetically(string);  
  console.log(sortedString); 


