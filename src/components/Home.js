import { html } from 'htm/preact';

export default function Home() {
  return html`
    <section>
      <h2>Home Component</h2>
      <p>This is a minimal Preact component styled by Pico CSS.</p>
      <form>
        <input type="email" placeholder="Your email" required />
        <button type="submit">Get Started</button>
      </form>
    </section>
  `;
}
