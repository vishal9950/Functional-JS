// count = 0;

function duckCount() {
	if(arguments.length === 0){
		return false;
	}
	let values = Object.values(arguments);
	// console.log(Object.prototype.hasOwnProperty.call(arguments[0], 'quack'));
	let res = values.reduce(function hasQuack(count, value) {
	  if(Object.prototype.hasOwnProperty.call(value, 'quack')){
	    count += 1;
	  }
	  return count;
	}, 0);
	return res;
}

module.exports = duckCount;

console.log('Should be true for no args: ', duckCount() === false);
let test1 = {quack: true};
let test2 = {quack: false};
console.log('Should work for proper args: ', duckCount(test1,test2) === 2);
