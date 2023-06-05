import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
      <div class="container">
      <h1 class="text-center mt-5">조원 소개</h1>
      <div class="row">
        <!-- 각 조원의 카드 -->
        <div class="col-lg-4 col-md-6">
          <div class="card member-card">
            <img src="/IMG_1125.png" class="card-img-top" alt="Member Image">
            <div class="card-body">
              <h5 class="card-title">김범창</h5>
              <p class="card-text">프론트엔드 및 제작물내용기반 발표</p>
            </div>
          </div>
        </div>
        <!-- 추가적인 조원 카드들 -->
        <div class="col-lg-4 col-md-6">
          <!-- 다른 조원 카드들 추가 -->
        </div>
      </div>
    </div>
    `;
  }
}
