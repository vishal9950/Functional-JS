function getShortMessages(messages) {
  let filtered = messages.filter(function lessThanFifty(msgs){
    return msgs.message.length <= 50;
  });
  let moreFiltered = filtered.map(x => x.message);
  return moreFiltered;
}

module.exports = getShortMessages;

let object = [
  {
      message: 'Tempor quis esse consequat sunt ea eiusmod.'
  },
  {
      message: 'Id culpa ad proident ad nulla laborum incididunt.'
  },
  {
      message: 'Ullamco in ea et ad anim anim ullamco est.'
  },
  {
      message: 'Est ut irure irure nisi.'
  }
];

function areEqual(first, second){
  let flag = 1;
  for (let i = 0; i < first.length; i++) {
   if(first[i] != second[i]){
     flag = 0;
   }
  }
  if(flag === 1){
    return true;
  }
  else {
    return false;
  }
}

let result = [ 'Tempor quis esse consequat sunt ea eiusmod.', 'Id culpa ad proident ad nulla laborum incididunt.', 'Ullamco in ea et ad anim anim ullamco est.', 'Est ut irure irure nisi.' ];

console.log('Should filter messages less than 50 characters: ', areEqual(getShortMessages(object), result));
