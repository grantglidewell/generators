const { html, htmlCollection } = new Context();
const slidePlane = document.getElementById('slide');

render(html`
<div class="slide">
<h1>To Start</h1>
<div class="content">
  press enter
  <img src=""></img>
</div>
</div>`, slidePlane);

const renderSlide = ({title, text, img, items}) => {
  render(html`
  <div class="slide">
  <h1>${title}</h1>
  <div class="content">
  ${text === null
    ?
    html`<ul>
      ${htmlCollection(items, item => item, item => html`<li>${item}</li>`)}
    </ul> `
    :
    text}
    <img src="${img}" height="200px" width="auto"></img>
  </div>
</div>
  `, slidePlane);
};

function* presentationSlides() {
  yield renderSlide({
    title: 'Slide 1',
    text: 'this is the text',
    img: './img.svg',
    items: [
      'thing1', 'thing2', 'another thing'
    ]
  });
  yield renderSlide({
    title: 'slide 2',
    img: './img.svg',
    text: null,
    items: [
      'thingchanged1', 'thing2', 'another thing'
    ]
  });
  yield renderSlide({
    title: 'slide 3',
    text: null,
    img: './img.svg',
    items: [
      'thing1', 'thingchanged2', 'another thing'
    ]
  });
  yield renderSlide({
    title: 'text null',
    img: './img.svg',
    text: null,
    items: [
      'thingchanged1', 'thing2', 'another thing'
    ]
  });
  yield renderSlide({
    title: 'last slide',
    text: 'this is the text',
    img: './img.svg',
    items: [
      'thing1', 'thingchanged2', 'another thing'
    ]
  });
}

const nextSlide = presentationSlides();

// render(html`<button onClick="nextSlide.next()">Next</button>`, document.getElementById('head'));
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    return nextSlide.next();
  }
});
