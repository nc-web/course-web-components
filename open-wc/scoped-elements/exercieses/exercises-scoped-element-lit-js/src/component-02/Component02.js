
import { LitElement, html, css } from 'lit'
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

export class Component02 extends ScopedElementsMixin(LitElement) {

    static get ScopedElements() {
        return {
          'component-01': Component02,
        }
    }

    render() {
        return html`
            <h4>COMPONENT 02</h4>
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

// customElements.define('component-01', Component02)
