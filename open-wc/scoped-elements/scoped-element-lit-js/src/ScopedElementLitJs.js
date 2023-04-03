
import { LitElement, html, css } from 'lit';

// Sections
// import './section-01/section-01.js'
// import './section-02/section-02.js'

import './section-01/Section01.js'
import './section-02/Section02.js'

// import {Section01} from './section-01/Section01.js'
// import {Section02} from './section-02/Section02.js'

export class ScopedElementLitJs extends LitElement {

  render() {
    return html`
      <main>
        <h1>SCOPED ELEMENTS</h1>

        <section-01></section-01>
        <section-02></section-02>
      </main>
    `
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }
  `
}

