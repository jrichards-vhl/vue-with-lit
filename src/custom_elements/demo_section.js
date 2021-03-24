import { LitElement, html, css } from 'lit-element';

export class DemoSection extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        margin-bottom: 10rem;
      }

      section {
        display: block;
        padding: var(--padding, 1rem);
        background-color: var(--background-color, #333);
      }
    `;
  }

  render() {
    html`
      <section>
        <slot name="content"></slot>
      </section>
    `;
  }
}
