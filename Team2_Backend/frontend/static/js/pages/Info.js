export default class {
    constructor() {
        document.title = "PersonInfo";
    }
    async getHtml() {
        return `
        <link rel="stylesheet" href="static/css/info.css">
        <!-- 조원소개 제목 -->
        <div class="card">
          <div class="card-body">
            <blockquote class="blockquote mt-3 text-center">
              <p class="h1">2조 조원소개</p>
            </blockquote>
          </div>
        </div>
    
        <!-- 조원소개 카드 -->
        <!--플립 카드 시작-->
        <div class="container">
          <div class="align-Center-row">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="img/pepe.jpg"
                    class="Introduce-Card-Img"
                    alt="introduce-repick-icon"
                  />
                  <h1 class="Tmoney-fontsize-200">김범창</h1>
                </div>
                <div class="flip-card-back">
                  <h1 class="Tmoney-fontsize-150 MarginBottom-5">김범창</h1>
                  <p class="KOTRA-fontsize-100">
                    <br />프론트를 담당하여 <br />메인페이지 및 조원소개페이지를
                    <br />제작하였습니다
                  </p>
    
                  <!-- 버튼 -->
                  <div class="container" id="main_box">
                    <div class="container_header"></div>
                    <div class="plans_container">
                      <div class="row">
                        <div class="plans_header col-12">
                          <ul class="plans_header_ul"></ul>
                        </div>
    
                        <!-- 삭제,수정,추가 버튼 -->
                        <div class="btn_box row-cols-12">
                          <button
                            type="button"
                            class="btn btn-primary col-1 del_btn"
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary col-1 mod_btn"
                          >
                            Modify
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary col-1 add_btn"
                            style="display: none"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="img/pepe2.jpg"
                    class="Introduce-Card-Img"
                    alt="introduce-repick-icon"
                  />
                  <h1 class="Tmoney-fontsize-200">김일곤</h1>
                </div>
                <div class="flip-card-back">
                  <h1 class="Tmoney-fontsize-150 MarginBottom-5">김일곤</h1>
                  <p class="KOTRA-fontsize-100">
                    백을 담당하여 <br />로그인 기능과 데이터관리를
                    <br />구현하였습니다
                  </p>
                  <!-- 버튼 -->
                  <div class="container" id="main_box">
                    <div class="container_header"></div>
                    <div class="plans_container">
                      <div class="row">
                        <div class="plans_header col-12">
                          <ul class="plans_header_ul"></ul>
                        </div>
    
                        <!-- 삭제,수정,추가 버튼 -->
                        <div class="btn_box row-cols-12">
                          <button
                            type="button"
                            class="btn btn-primary col-1 del_btn"
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary col-1 mod_btn"
                          >
                            Modify
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary col-1 add_btn"
                            style="display: none"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="img/pepe3.jpg"
                    class="Introduce-Card-Img"
                    alt="introduce-repick-icon"
                  />
                  <h1 class="Tmoney-fontsize-200">김건우</h1>
                </div>
                <div class="flip-card-back">
                  <h1 class="Tmoney-fontsize-150 MarginBottom-5">김건우</h1>
                  <p class="KOTRA-fontsize-100">
                    백을 담당하여 <br />로그인 기능 및 데이터관리를
                    <br />구현하였습니다
                  </p>
                  <!-- 버튼 -->
                  <div class="container" id="main_box">
                    <div class="container_header"></div>
                    <div class="plans_container">
                      <div class="row">
                        <div class="plans_header col-12">
                          <ul class="plans_header_ul"></ul>
                        </div>
    
                        <!-- 삭제,수정,추가 버튼 -->
                        <div class="btn_box row-cols-12">
                          <button
                            type="button"
                            class="btn btn-primary col-1 del_btn"
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary col-1 mod_btn"
                          >
                            Modify
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary col-1 add_btn"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="img/pepe4.jpg"
                    class="Introduce-Card-Img"
                    alt="introduce-repick-icon"
                  />
                  <h1 class="Tmoney-fontsize-200">박수헌</h1>
                </div>
                <div class="flip-card-back">
                  <h1 class="Tmoney-fontsize-150 MarginBottom-5">박수헌</h1>
                  <p class="KOTRA-fontsize-100">
                    프론트를 담당하여 <br />게시판 페이지를 <br />제작하였습니다
                  </p>
                  <!-- 버튼 -->
                  <div class="container" id="main_box">
                    <div class="container_header"></div>
                    <div class="plans_container">
                      <div class="row">
                        <div class="plans_header col-12">
                          <ul class="plans_header_ul"></ul>
                        </div>
    
                        <!-- 삭제,수정,추가 버튼 -->
                        <div class="btn_box row-cols-12">
                          <button
                            type="button"
                            class="btn btn-primary col-1 del_btn"
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary col-1 mod_btn"
                          >
                            Modify
                          </button>
                          <button
                            type="button"
                            class="btn btn-primary col-1 add_btn"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossorigin="anonymous"
        ></script>
        <script src="js/intord2.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        `;
    }
}
