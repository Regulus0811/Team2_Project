import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
            <h1>메인화면</h1>
            <p>
                메인화면입니다
            </p>
            <p>
                <a href="/post" data-link>View recent posts</a>
            </p>
        `;
  }
}
