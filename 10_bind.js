module.exports = function(namespace) {
	return console.log.bind(null, namespace);
};

// testcases


//console.log('Should not work for empty arguments: ', false);
// console.log('Should work for \'WARN\' and \'Info Msg\': ', false);
// console.log('Should not work for \'\' and \'Info Msg\': ', false);
// console.log('Should not work for \'WARN\' and \'\': ', false);
