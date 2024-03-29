
import { LitElement, html, css } from 'lit'
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

// Components
// import { Component03 } from './components/component-03.js'
// import { Component04 } from './components/component-04.js'
// import { Component03 } from './components/Component03.js'
import { Component04 } from './components/Component04.js'

export class Section01 extends ScopedElementsMixin(LitElement) {

    static get scopedElements() {
        return {
            // 'component-01': Component03,
            'component-02': Component04,
        }
    }

    constructor() {
        super();
    
        import('./components/Component03.js').then(({ Component03 }) => this.defineScopedElement('component-01', Component03));
      }

    render() {
        return html`
            <h2>SECTION 01</h2>

            <component-01></component-01>
            <component-02></component-02>
        `
    }

    static styles = css`
        :host {
            display: block;
            margin: 0;
            padding: 0;
            background-color: chocolate;
        }
    `
}

customElements.define('section-01', Section01)