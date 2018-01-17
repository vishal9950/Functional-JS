function reduce(arr, fn, initial, ind=0) {
	if (arr.length === 0) {
    console.log('Err1: Empty array provided');
		return initial;
	}
	if(arr.length === ind) return initial;
	let curr = fn(initial, arr[ind], ind, arr);
  return reduce(arr, fn, curr, ++ind);
}

function add(prev, curr, indx, arr) {
  return prev + curr;
}

module.exports = reduce;

console.log('Should be false for empty array: ', reduce([]) === undefined);

console.log('Should be true for numeric args: ', reduce([1, 2, 3, 4], add, 0) === 10);

console.log('Should be true for strings: ', reduce(['World', '!'], add, 'Hello ') === 'Hello World!');
