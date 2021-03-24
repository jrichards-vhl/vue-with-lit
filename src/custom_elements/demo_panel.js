import { LitElement, html, css } from 'lit-element';

export class DemoPanel extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }

      /*
       * These styles are encapsulated within the shadow DOM, so we can use
       * very semantic class names, e.g. "panel" that might otherwise have a
       * naming collision.
       *
       * Since CSS custom properties cascade through the Shadow DOM, we can
       * expose a "CSS API" for customizing this custom element within
       * constraints set by the element's author.
       */
      .panel {
        padding: var(--padding, 1rem);
        background-color: var(--background-color, #000);
        border: var(--border, thin solid #aaa);
        box-shadow: 0.25rem 0.25rem 1rem rgba(0, 0, 0, 1);
      }
    `
  }

  render() {
    return html`
      <div class="panel">
        <slot name="panel-content"></slot>
      </div>
    `
  }
}
