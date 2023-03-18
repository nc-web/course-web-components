
import { LitElement, html, css } from 'lit'
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

// Components
// import { Component01 } from './components/Component01.js'
// import { Component02 } from './components/Component02.js'
// import { Component03 } from './components/component-03.js'
// import { Component04 } from './components/component-04.js'

import { Component03 } from './components/Component03.js'
import { Component04 } from './components/Component04.js'

export class Section01 extends ScopedElementsMixin(LitElement) {

    static get scopedElements() {
        return {
            // 'component-01': Component01,
            // 'component-02': Component02,
            'component-03': Component03,
            'component-04': Component04,
        }
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