import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
      <div class="container text-center">
        <h1 class="my-4">메인화면</h1>
        <p>
          메인화면입니다
        </p>
        <p>
          <a href="/post" class="btn btn-primary" data-link>View recent posts</a>
        </p>
      </div>
    `;
  }
}
