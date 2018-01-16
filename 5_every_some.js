function checkUsersValid(goodUsers) {
  function areGoodUsers(testUsers) {
    let result = goodUsers.some(function test(goodUser){
      return goodUser.id === testUsers.id;
    });
    return result;
  }

  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(areGoodUsers);
  }
}

// module.exports = checkUsersValid;

let goodUsers = [
  { id : 1},
  { id : 2},
  { id : 3}
];

let submittedUsers = [
  { id : 1},
  { id : 3}
]

console.log('#TC1: Should be true for proper args: ', checkUsersValid(goodUsers)(submittedUsers) === true);
