import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
            <h1>후쿠오카info.</h1>
            <p>
                후쿠오카 가고싶다~
            </p>
        `;
  }
}
