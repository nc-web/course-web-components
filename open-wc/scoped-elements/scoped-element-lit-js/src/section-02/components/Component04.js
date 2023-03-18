
import { LitElement, html, css } from 'lit'

export class Component04 extends LitElement {

    render() {
        return html`
            <h4>COMPONENT 04</h4>
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

// customElements.define('component-04', Component04)
