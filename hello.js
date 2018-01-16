function upperCaser(a) {
  if (a.length === 0) {
    console.log('Err 1: Empty string supplied!');
    return false;
  }
}

console.log('#TC1: Should be false for empty string: ', upperCaser('') === false);
