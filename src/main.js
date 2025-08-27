import { h, render } from 'preact';
import htm from 'htm';
import Home from './components/Home.js';
import '@picocss/pico/css/pico.min.css';

const html = htm.bind(h);

function App() {
  return html`<${Home} />`;
}

render(html`<${App} />`, document.getElementById('app'));
