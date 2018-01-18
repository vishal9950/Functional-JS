var slice = Array.prototype.slice;

function logger(namespace) {
  return function() {
    let args = slice.call(arguments);
    console.log.apply(null, [namespace].concat(args));
  }
// 	console.log(namespace);
// 	return print.apply(null, arguments);
// 	// console.log('start arguments: ', arguments);
// 	// console.log('end arguments.');
// 	// console.log('start args: ', args);
// 	// console.log('end args');
// 	// console.log(namespace, print.apply(null, arguments));
// 	// console.log('namespace:', namespace);
// 	// console.log('args: ', args);
// 	// console.log('arguments: ', arguments);
// 	// console.log(namespace, print.apply(null, args));
// 	// console.log(namespace, print.apply(null, [namespace, args]));
// 	// console.log(namespace);
// 	// return print.apply(null, arguments[0]);
}

// function help(print, namespace, args) {
//   console.log(namespace);
//   console.log(print.apply(namespace, args));
// }
//
// function print(a, b) {
// 	return a + b;
//
// 	// return namespace + msg;
// }

//logger('INFO:')('sample', 'text')
module.exports = logger;

// let info = logger(print, 'INFO:');
// console.log(info('this is also a msg'));



// testcases


//console.log('Should not work for empty arguments: ', false);
// console.log('Should work for \'WARN\' and \'Info Msg\': ', false);
// console.log('Should not work for \'\' and \'Info Msg\': ', false);
// console.log('Should work for \'WARN\' and \'\': ', false);

// console.log('Should not work if array-lists provided to apply: ', false);
