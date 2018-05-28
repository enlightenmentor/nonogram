import { LitElement, html } from "@polymer/lit-element/lit-element.js";
import { connect } from "pwa-helpers/connect-mixin.js";

import store from "./store/index.js";
import { fetchNonograms } from "./store/actions.js";
import inputView from "./components/input-view.js";

class AppRoot extends connect(store)(LitElement) {
  static get properties() {
    return {
      input: String
    }
  }

  constructor() {
    super();
    this.input = 'input';
  }

  _firstRendered() {
    store.dispatch(fetchNonograms());
  }

  _stateChanged(state) {
    console.log("[_stateChanged]:", state);
  }

  _render(props) {
    return html`
      ${inputView(props.input)}
      <input
        type="text" value="${props.input}"
        oninput="${this.handleInput.bind(this)}"/>
    `
  }

  handleInput(e) {
    this.input = e.target.value;
  }
}

customElements.define("app-root", AppRoot);