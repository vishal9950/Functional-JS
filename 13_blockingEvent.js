function repeat(operation, num) {
	// modify this so it can be interrupted
	if (num % 20 === 0){
		setTimeout(function() {
			repeat(operation, --num);
		});
	}
	else {
		repeat(operation, --num);
	}
	operation();
	//return repeat(operation, --num);
}

module.exports = repeat;
