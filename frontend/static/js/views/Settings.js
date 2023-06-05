import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
      <div class="container text-center">
        <h1 class="my-4">조원소개</h1>
        <p>
          ㅎㅇ? 우리는 2조임
        </p>
      </div>
    `;
  }
}
