function removeBlanks(string) {
  return string.replace(/\s/g, '');
}
console.log(removeBlanks(' Pl ayTha tF u nkyM usi c '));

function getDigits(string) {
  return string.replace(/\D/g, '');
}
console.log(getDigits('0s1a3y5w7h9a2t4?6!8?0'));

function acronyms(string) {
    var words = string.split(' ');
    var acronym = '';
    for (var i = 0; i < words.length; i++) {
        acronym += words[i][0].toUpperCase();
    }
    return acronym;
}
console.log(acronyms('Live from New York, it\'s Saturday Night!'));

function countNonSpaces(string) {
    return string.replace(/\s/g, '').length;
}
console.log(countNonSpaces('Honey pie, you are driving me crazy'));

function removeShorterStrings(string, length) {
    var words = string.split(' ');
    for (var i = 0; i < words.length; i++) {
        if (words[i].length < length) {
            words.splice(i, 1);
            i--;
        }
    }
    return words.join(' ');
}
console.log(removeShorterStrings('The quick brown fox jumped over the lazy dog', 4));


