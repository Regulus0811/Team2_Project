import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
      <div class="container text-center">
        <h1 class="my-4">Across Fukuoka</h1>
        <p>
          대충 어떤페이지인지 소개하는 문구를 적으면 될 것 같다.
        </p>
        <p>
          <a href="/post" class="btn btn-primary" data-link>View recent posts</a>
        </p>
        <img src="https://source.unsplash.com/random/?fukuoka" class="img-fluid" alt="Responsive image">
        
      </div>
    `;
  }
}
