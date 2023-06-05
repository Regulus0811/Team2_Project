import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }

  async getHtml() {
    return `
      <div class="container text-center">
      <h1 class="text-center mt-5">조원 소개</h1>
      <div class="row">
        <!-- 각 조원의 카드 -->
        <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="card member-card mb-4">
              <img src="" class="card-img-top" alt="Member Image">
              <div class="card-body">
                <h5 class="card-title">김범창</h5>
                <p class="card-text">프론트엔드 및 제작물내용기반 발표</p>
              </div>
            </div>
            <div class="card member-card">
              <img src="" class="card-img-top" alt="Member Image">
              <div class="card-body">
                <h5 class="card-title">김일곤</h5>
                <p class="card-text">백엔드 및 데이터베이스 설계</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card member-card mb-4">
              <img src="" class="card-img-top" alt="Member Image">
              <div class="card-body">
                <h5 class="card-title">김건우</h5>
                <p class="card-text">UI/UX 디자인 및 사용자 연구</p>
              </div>
            </div>
            <div class="card member-card">
              <img src="" class="card-img-top" alt="Member Image">
              <div class="card-body">
                <h5 class="card-title">박수헌</h5>
                <p class="card-text">프로젝트 매니저 및 팀 리더십</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
