function doubleAll(numbers) {
  const map1 = numbers.map(x => x * 2);
  console.log(map1);
  return map1;
}

function areArraysEqual(first, second) {
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

//module.exports = doubleAll;

console.log('#TC1: Should be true for proper args: ', areArraysEqual(doubleAll([1,2,3,4]), [ 2, 4, 6, 8]));
