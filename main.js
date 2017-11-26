const { html, htmlCollection } = new Context();
const slidePlane = document.getElementById('container');

render(html`
<div class="slide">
  <h1 class="title">Generators</h1>
  <div class="content">
    Grant Glidewell
  </div>
</div>`, slidePlane);

const renderSlide = ({ title, text, img, items }) => {
  render(html`
  <div class="slide">
  <h1 class="title">${title}</h1>
  <div class="content">
  ${text === null
    ?
    html`<ul>
      ${htmlCollection(items, item => item, item => html`<li>${item}</li>`)}
    </ul> `
    :
    text}
    <div>
      <img src="${img}"></img>
    </div>
  </div>
</div>
  `, slidePlane);
};

const slides = [
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
      'syntax is familiar', 'use cases are...', 
      'another thing about generators'
    ],
  },
  {
    title: 'Generators - Syntax',
    img: './img/syntax.png',
    text: 'Same Syntax as a Function constructor, just add a * between the function keyword and the name',
    items: []
  },
  {
    title: 'Generators - Syntax',
    text: 'Generators use the yield keyword as many times as is necessary, in place of a single return statement',
    img: './img/syntax.png',
    items: []
  },
  {
    title: 'Generators - Syntax',
    text: 'We then use the generator by defining a constatnt',
    img: './img/syntax.png',
    items: []
  },
  {
    title: 'Generators - Output',
    text: null,
    img: './img/yield-object.png',
    items: ['we run the generator with .next()']
  },
  {
    title: 'Generators - Output',
    text: null,
    img: './img/yield-object.png',
    items: [
      'we run the generator with .next()', 
      'the output is an object that looks like this'
    ]
  },
  {
    title: 'Generators - Output',
    text: null,
    img: './img/yield-object.png',
    items: [
      'we run the generator with .next()', 
      'the output is an object that looks like this', 
      'it has a value(the result of the yield), and a done key'
    ]
  },
  {
    title: 'Generators - Output',
    text: null,
    img: './img/yield-object.png',
    items: [
      'we run the generator with .next()', 
      'the output is an object that looks like this', 
      'it has a value(the result of the yield), and a done key', 
      'what happens if we keep calling .next()?'
    ]
  },
  {
    title: 'Generators - Output',
    text: '',
    img: './img/yield-sequence.png',
    items: []
  },
  {
    title: 'Generators - Output',
    text: 'What happens when it is finally done?',
    img: './img/done-true.png',
    items: []
  },
  {
    title: 'Generators - Usecases',
    text: 'Why would I use this instead of other ways to accomplish the same thing?',
    img: '',
    items: []
  },
  {
    title: 'Generators - Usecases',
    text: '',
    img: './img/flow-example.png',
    items: []
  },
  {
    title: 'Generators - Usecases',
    text: 'The first run fetches all these users, I need their ids to fetch their posts',
    img: './img/fetch-users.png',
    items: []
  },
  {
    title: 'Generators - Usecases',
    text: 'Boom!',
    img: './img/fetch-posts.png',
    items: []
  },

];

function* presentationSlides() {
  for (const slide of slides) {
    yield renderSlide(slide)
  }
};

const nextSlide = presentationSlides();

// render(html`<button onClick="nextSlide.next()">Next</button>`, document.getElementById('head'));
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    return nextSlide.next();
  }
});
