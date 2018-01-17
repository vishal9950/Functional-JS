function reduce(arr, fn, initial, ind=0) {
	if (arr.length === 0) {
		return initial;
	}
	if(arr.length === ind) return initial;
	let curr = fn(initial, arr[ind], ind, arr);
  return reduce(arr, fn, curr, ++ind);
}

module.exports = reduce;

console.log('Should be false for empty array: ', reduce([]) === undefined);

// console.log('Should be true for proper args: ', reduce([]) === true);
