// count = 0;

function duckCount() {
	if(arguments.length === 0){
    console.log('Err1: Empty arguments to duckCount');
		return false;
	}
	let values = Object.values(arguments);
	// console.log(Object.prototype.hasOwnProperty.call(arguments[0], 'quack'));
	let res = values.reduce(function hasQuack(count, value) {
	  // if(Object.prototype.hasOwnProperty.call(value, 'quack')){
		if(value.hasOwnProperty('quack')){
	    count += 1;
	  }
	  return count;
	}, 0);
	return res;
}

// module.exports = duckCount;

//testcases
console.log('Should be true for no args: ', duckCount() === false);

let test1 = {quack: true};
let test2 = {quack: false};
console.log('Should work for 2 ducks: ', duckCount(test1,test2) === 2);

test2 = Object.create({quack: true});
console.log('Should work for 1 duck and 1 not duck: ', duckCount(test1, test2) === 1);

test1 = Object.create({quack: true});
console.log('Should work for both not ducks: ', duckCount(test1, test2) === 0);

// test hasOwnProperty
test1 = {quack: true,
				hasOwnProperty: function () {
					return false;
				}
};
console.log('hasOwnProperty: ', test1.hasOwnProperty('quack'));
console.log('Object.prototype.hasOwnProperty: ', Object.prototype.hasOwnProperty.call(test1, 'quack'));
