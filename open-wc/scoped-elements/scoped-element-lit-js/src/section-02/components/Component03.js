
import { LitElement, html, css } from 'lit'
import { ScopedElementsMixin } from '@open-wc/scoped-elements';

export class Component03 extends ScopedElementsMixin(LitElement) {

    static get scopedElements() {
        return {
          'component-03': Component03,
        }
    }

    render() {
        return html`
            <h4>COMPONENT 03</h4>
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

// customElements.define('component-01', Component01)