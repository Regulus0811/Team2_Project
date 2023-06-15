import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Main Page');
    }

    async getHtml() {
        return `
        <div class="carousel-container">
            <!-- 이미지 캐러셀 -->
            <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
            >
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="5000">
                <img src="img/machi.jpg" class="img-fluid" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                <img src="img/kusida.jpg" class="img-fluid" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                <img src="img/dom.jpg" class="img-fluid" alt="..." />
                </div>
            </div>
            </div>
            <div class="container text-center text-light">
            <!-- 로고 및 페이지 슬로건, 게시글 이동 버튼 -->
            <div class="content">
                <h1 class="my-4">Across Fukuoka</h1>
                <p class="my-5">
                28일간의 후쿠오카에 대한 모든 것, <br />지금 여기에서.
                </p>
                <p>
                <a href="/post" class="btn btn-primary" data-link>게시글로 이동</a>
                </p>
            </div>
            </div>
        </div>
        `;
    }
}