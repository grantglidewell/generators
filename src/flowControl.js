const uri = 'https://jsonplaceholder.typicode.com';
const fakeState = {
  users: [],
  posts: [],
};

function fetchIt(totalUri) {
  fetch(totalUri)
    .then(data => data.json())
    .then((data) => {
      Object.keys(data[0]).includes('address') ? fakeState.users = data : fakeState.posts = data;
      return data;
    });
}

function* fetchSteps() {
  yield fetchIt(`${uri}/users`);
  yield fakeState.users.map((user) => {
    fetchIt(`${uri}/posts?userId=${user.id}`).then(posts => fakesState.posts);
  });
}

const fetchGen = fetchSteps();
