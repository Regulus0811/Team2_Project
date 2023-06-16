export default class {
  constructor() {
    document.title = "PersonInfo";
  }
  async getHtml() {
    return `
    <style>.flip-card {
      background-color: transparent;
      border: none;
      width: 300px;
      height: 220px;
      perspective: 1000px;
      /* perspective : 원근법 
    3D effect필요없으면 삭제 */
    }
    
    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 160%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
      /* preserve-3d : 변환된 자식 요소가 3D 변환을 유지*/
    }
    
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
      /* Y축으로 180도 플립*/
    }
    
    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }
    
    .flip-card-front {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: solid black 3px;
      border-radius: 5%;
      background-color: white;
      color: black;
    }
    
    .flip-card-back {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 5%;
      background-color: #71d3c2;
      border: solid black 3px;
      color: white;
      transform: rotateY(180deg);
    }
    
    .Introduce-Card-Img {
      width: 65%;
      margin-bottom: 15%;
    }
    
    .align-Center-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 100px; /* 여백 조정 */
      justify-items: center;
      align-items: center;
      margin-top: 20px; /* 카드를 아래로 내리기 위해 마진을 추가 */
    }
    
    .flip-card {
      flex: 1;
      margin: 10px; /* 카드사이의 간격을 조정 */
      padding: 10px; /* 카드랑 헤더 사이의 여백추가 */
      /* 나머지 스타일 속성을 유지합니다 */
    }
    
    .h1 {
      font-size: 65px;
      text-align: center;
      font-family: "Gamja Flower", cursive;
      color: black;
      -webkit-text-stroke: 0.5px black;
    }
    
    .navbar-brand {
      font-family: "Mochiy Pop One", sans-serif;
    }
    </style>
    <!-- 조원소개 제목 -->
    <div class="card bg-primary-subtle">
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
                src="/static/img/pepe.jpg"
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
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="/static/img/pepe2.jpg"
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
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="/static/img/pepe3.jpg"
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
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img
                src="/static/img/pepe4.jpg"
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
        `;
  }
}
