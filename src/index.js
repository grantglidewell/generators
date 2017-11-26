import { Context, render } from 'yallajs';
import slides from './slides';

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
    ${img ? html`<img src="${img}"></img>` : ''}
  </div>
</div>
  `, slidePlane);
};

const stepGen = function* stepGen(steps) {
  while (true) yield* steps;
};

const gen = stepGen(slides);

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    renderSlide(gen.next().value);
  }
});
