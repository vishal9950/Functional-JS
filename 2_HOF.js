let counter = 0;

function operation() {
  counter++;
}

function repeat(operation, num) {
  let check1 = verifyIfNumber(num);
  if(!check1){
    return false;
  }
  else {
    return true;
  }
}

function verifyIfNumber(num) {
  if(typeof num === 'number'){
    return true;
  }
  else {
    return false;
  }
}

module.exports = repeat;

console.log('#TC1: Should be false if second argument is not a number: ', repeat(operation, 'hg') === false);
console.log('#TC2: Should be true for proper args: ', repeat(operation, 12) === true);
