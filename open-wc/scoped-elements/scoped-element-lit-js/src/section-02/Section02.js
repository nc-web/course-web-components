
import { LitElement, html, css } from 'lit'
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

// Components
import { Component03 } from './components/Component03.js'
import { Component04 } from './components/Component04.js'

export class Section02 extends ScopedElementsMixin(LitElement) {

    static get scopedElements() {
        return {
          'component-03': Component03,
          'component-04': Component04,
        }
    }

    render() {
        return html`
            <h2>SECTION 02</h2>

            <component-03></component-03>
            <component-04></component-04>
        `
    }

    static styles = css`
        :host {
            display: block;
            margin: 0;
            padding: 0;
            background-color: blueviolet;
        }
    `
}

customElements.define('section-02', Section02)