function repeat(operation, num) {
	// modify this so it can be interrupted
	if (num % 10 === 0){
		setTimeout(function() {
			return repeat(operation, --num);
		});
	}
	else {
		return repeat(operation, --num);
	}
	operation();
	//return repeat(operation, --num);
}

module.exports = repeat;
