function checkUsersValid(goodUsers) {
  function areGoodUsers(testUsers) {
    let result = goodUsers.some(goodUser => goodUser.id === testUsers.id);
    return result;
  }

  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(areGoodUsers);
  }
}

module.exports = checkUsersValid;

var goodUsers = [
  { id : 1},
  { id : 2},
  { id : 3}
];

var submittedUsers = [
  { id : 1},
  { id : 3}
]

console.log('Should be true for proper args: ', checkUsersValid(goodUsers)(submittedUsers) === true);
