export default [
  {
    title: 'Generators',
    text: 'A normal function, but not really...',
    img: '',
    items: [],
  },
  {
    title: 'Generators',
    text: null,
    img: '',
    items: [
      'normal functions have one return',
      'generators can return multiple values',
      'syntax is familiar',
      'use cases are...',
      'another thing about generators',
    ],
  },
  {
    title: 'Generators - Syntax',
    img: 'img/syntax.png',
    text: 'Same Syntax as a Function constructor, just add a * between the function keyword and the name',
    items: [],
  },
  {
    title: 'Generators - Syntax',
    text: 'Generators use the yield keyword as many times as is necessary, in place of a single return statement',
    img: 'img/syntax.png',
    items: [],
  },
  {
    title: 'Generators - Syntax',
    text: 'We then use the generator by defining a constatnt',
    img: 'img/syntax.png',
    items: [],
  },
  {
    title: 'Generators - Output',
    text: null,
    img: 'img/yield-object.png',
    items: [
      'we run the generator by calling .next() on the const',
    ],
  },
  {
    title: 'Generators - Output',
    text: null,
    img: 'img/yield-object.png',
    items: [
      'we run the generator by calling .next() on the const',
      'the output is an object that looks like this',
    ],
  },
  {
    title: 'Generators - Output',
    text: null,
    img: 'img/yield-object.png',
    items: [
      'we run the generator by calling .next() on the const',
      'the output is an object that looks like this',
      'it has a value(the result of the yield), and a done key',
    ],
  },
  {
    title: 'Generators - Output',
    text: null,
    img: 'img/yield-object.png',
    items: [
      'we run the generator by calling .next() on the const',
      'the output is an object that looks like this',
      'it has a value(the result of the yield), and a done key',
      'what happens if we keep calling .next()?',
    ],
  },
  {
    title: 'Generators - Output',
    text: 'The yield is different each time',
    img: 'img/yield-sequence.png',
    items: [],
  },
  {
    title: 'Generators - Output',
    text: 'What happens when it is finally done?',
    img: 'img/done-true.png',
    items: [],
  },
  {
    title: 'Generators - Usecases',
    text: 'Why would I use this?',
    img: '',
    items: [],
  },
  {
    title: 'Generators - Usecases',
    text: 'We could use generators for fetch flow control',
    img: 'img/flow-example.png',
    items: [],
  },
  {
    title: 'Generators - Usecases',
    text: 'The first run fetches all these users, I need their ids to fetch their posts',
    img: 'img/fetch-users.png',
    items: [],
  },
  {
    title: 'Generators - Usecases',
    text: 'Boom! we have all the posts!',
    img: 'img/fetch-posts.png',
    items: [],
  },
  {
    title: 'Generators - Summary',
    text: null,
    items: [
      'a * after function allows you to use yield',
    ],
  },
  {
    title: 'Generators - Summary',
    text: null,
    items: [
      'a * after function allows you to use yield',
      'create a constant to call the generator',
    ],
  },
  {
    title: 'Generators - Summary',
    text: null,
    items: [
      'a * after function allows you to use yield',
      'create a constant to call the generator',
      'the next() function moves to the next yield',
    ],
  },
  {
    title: 'Generators - Summary',
    text: null,
    items: [
      'a * after function allows you to use yield',
      'create a constant to call the generator',
      'the next() function moves to the next yield',
      'an object is returned from the generator',
    ],
  },
  {
    title: 'Generators - Summary',
    text: null,
    items: [
      'a * after function allows you to use yield',
      'create a constant to call the generator',
      'the next() function moves to the next yield',
      'an object is returned from the generator',
      'this object has a value and done key',
    ],
  },
  {
    title: 'Generators',
    text: null,
    items: [
      'Grant Glidewell',
      'https://github.com/ggcadc',
      'this.prototype.grant@gmail.com',
    ],
  },
];
