export default class {
    constructor() {
        document.title = "PersonInfo";
    }
    async getHtml() {
        return `
      <!-- 조원소개 제목 -->
      <div class="card">
        <div class="card-body">
          <blockquote class="blockquote mt-3 text-center">
            <p>2조 조원소개</p>
          </blockquote>
        </div>
      </div>
  
      <!-- 조원소개 카드 -->
      <div class="card-group">
        <div class="card border-primary mb-3">
          <img src="/static/img/pepe.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">김범창</h5>
            <p class="card-text text-center">
              메인페이지, 조원소개 페이지를 제작하였습니다.
            </p>  
          </div>
        </div>
        <div class="card border-primary mb-3">
          <img src="/static/img/pepe2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">김일곤</h5>
            <p class="card-text text-center">
              총 제작관리 및 백엔드를 담당하였습니다.
            </p>
          </div>
        </div>
        <div class="card border-primary mb-3">
          <img src="/static/img/pepe3.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">김건우</h5>
            <p class="card-text text-center">
              로그인 기능 및 백엔드를 담당하였습니다.
            </p>
          </div>
        </div>
        <div class="card border-primary mb-3">
          <img src="/static/img/pepe4.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">박수헌</h5>
            <p class="card-text text-center">
              후쿠오카info 페이지를 제작하였습니다.
            </p>
          </div>
        </div>
      </div>
  
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
        crossorigin="anonymous"
      ></script>
        `;
    }
}
