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

const renderSlide = (title, text, img, ...items) => {
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
  yield renderSlide('Title 1', null, 'img.svg', 'item', 'item2', 'item3');
  yield renderSlide('Title 2', null, 'img.svg', 'item', 'item2', 'item3');
  yield renderSlide('Title 3', 'i can insert text in here to override list items', 'img.svg', 'item', 'thing', 'item3');
  yield renderSlide('No Image, No Array', null, 'img.svg');
  yield renderSlide('Title 5', null, 'img.svg', 'item', 'item2', 'item3');
  yield renderSlide('Title 6', null, 'img.svg', 'item', 'item2', 'item3');

}

const nextSlide = presentationSlides();

// render(html`<button onClick="nextSlide.next()">Next</button>`, document.getElementById('head'));
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    return nextSlide.next();
  }
});
