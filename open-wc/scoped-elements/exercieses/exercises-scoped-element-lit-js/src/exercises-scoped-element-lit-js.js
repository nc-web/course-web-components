
import { LitElement, html, css } from 'lit';
// import { ScopedElementsMixin } from '@open-wc/scoped-elements';

// Components
import './component-01/Component01.js'
import './component-02/Component02.js'

class ExercisesScopedElementLitJs extends LitElement {

  // static get ScopedElements() {
  //   return {
  //     'component-01': Component01,
  //     'component-01': Component02,
  //   }
  // }

  render() {
    return html`
      <main>
        <h2>SCOPED ELEMENTS</h2>

        <component-01></component-01>
        <component-02></component-02>
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

customElements.define('exercises-scoped-element-lit-js', ExercisesScopedElementLitJs);