function countWords(inputWords) {
	if(inputWords.length === 0){
		return false;
	}
	else {
    let result = {};
    let countedWords = inputWords.reduce(function functionName(result, name) {
      if(result[name]){
        result[name] += 1;
      }
      else {
        result[name] = 1;
      }
      return result;
    },result);
    return countedWords;
	}
}

function areObjectsEqual(input, result, expected) {
  let set = new Set(input);
  for (let item of set) {
    if(result[item] === expected[item]){
      continue;
    }
    else {
      return false;
    }
  }
  return true;
}

//module.exports = countWords;

console.log('Should not work for empty array: ', countWords([]) === false);

let check = { Apple: 2, Banana: 1, Durian: 3 };
console.log('Should work for proper args: ', areObjectsEqual(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'], countWords(['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']),check));
