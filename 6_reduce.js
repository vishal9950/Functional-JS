function countWords(inputWords) {
	if(inputWords.length === 0){
		return false;
	}
	else {
    let result = {};
    let countedWords = inputWords.reduce(function functionName(result, name) {
      if(result[name]){
        result[name] ++;
      }
      else {
        result[name] = 1;
      }
      return result;
    },result);
    return countedWords;
	}
}

function areObjectsEqual(first, second) {
  let flag = 1;
  for (let i = 0; i < first.length; i++) {
    if(first[i] != second[i]){
      flag = 0;
    }
  }
  if(flag === 1){
    return true;
  }
  else {
    return false;
  }
}

module.exports = countWords;

console.log('Should not work for empty array: ', countWords([]) === false);

let check = { Apple: 2, Banana: 1, Durian: 3 };
console.log('Should work for proper args: ', areObjectsEqual(countWords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']),check));
