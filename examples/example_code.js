// const starshipCaptains = [
//   {name: 'Jean-Luc Picard', affiliation: 'Starfleet'},
//   {name: 'Han Solo', affiliation: 'Rebel Alliance'},
//   {name: 'The Doctor', affiliation: 'Gallifrey'},
//   {name: 'Malcom Reynolds', affiliation: 'Firefly'},
//   {name: 'Turanga Leela', affiliation: 'Planet Express'},
//   {name: 'William Adama', affiliation: 'Galactica'}
// ]
// function *loop(array){
//   for (const item of array){
//     yield item
//   }
// }

// const captainGen = loop(starshipCaptains)

const uri = 'https://jsonplaceholder.typicode.com';

let fakeState = [];

function fetchIt(url){
  fetch(url).then(data => data.json()).then(data => {
    fakeState = data;
    console.log(fakeState)
    return data
  });
};

function *fetchSteps(){
  yield fetchIt(`${uri}/users`);
  yield fakeState.map(user => {
    fetchIt(`${uri}/posts?userId=${user.id}`);
  });
};

const fetchGen = fetchSteps();
