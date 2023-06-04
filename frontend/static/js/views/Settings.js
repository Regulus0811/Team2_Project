import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
            <h1>조원소개</h1>
            <p>
                ㅎㅇ?우리는2조임
            </p>
        `;
  }
}
