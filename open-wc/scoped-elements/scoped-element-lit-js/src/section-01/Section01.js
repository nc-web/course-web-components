
import { LitElement, html, css } from 'lit'
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

// Components
import { Component03 } from './components/component-03.js'
import { Component04 } from './components/component-04.js'

export class Section01 extends ScopedElementsMixin(LitElement) {

    static get scopedElements() {
        return {
            'component-03': Component03,
            'component-04': Component04,
        }
    }

    render() {
        return html`
            <h2>SECTION 01</h2>

            <component-03></component-03>
            <component-04></component-04>
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

// customElements.define('section-01', Section01)