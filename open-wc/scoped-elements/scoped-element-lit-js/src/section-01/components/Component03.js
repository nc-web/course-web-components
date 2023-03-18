
import { LitElement, html, css } from 'lit'

export class Component03 extends LitElement {

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

// customElements.define('component-03', Component03)