const starshipCaptains = [
  {name: 'Jean-Luc Picard', affiliation: 'Starfleet'},
  {name: 'Han Solo', affiliation: 'Rebel Alliance'},
  {name: 'The Doctor', affiliation: 'Gallifrey'},
  {name: 'Malcom Reynolds', affiliation: 'Firefly'},
  {name: 'Turanga Leela', affiliation: 'Planet Express'},
  {name: 'William Adama', affiliation: 'Galactica'}
]
function *loop(array){
  for (const item of array){
    yield item
  }
}

const captainGen = loop(starshipCaptains)
