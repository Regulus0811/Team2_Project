import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
      <div class="container text-center">
        <h1 class="my-4">후쿠오카info.</h1>
        <p>
          후쿠오카 가고싶다~
        </p>
      </div>
    `;
  }
}
