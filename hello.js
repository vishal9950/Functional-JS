function upperCaser(a) {
  if (a.length === 0) {
    console.log('Err 1: Empty string supplied!');
    return false;
  }
  return a.toUpperCase();
}

console.log('#TC1: Should be false for empty string: ', upperCaser('') === false);
console.log('#TC2: Should be true for random strings: ', upperCaser('Lorem Ipsum') === 'LOREM IPSUM');
