export default class PostInfo {
    constructor() {
      document.title = "PostInfo";
      this.postData = null;
    }
  
    async loadPostData() {
      const queryParams = new URLSearchParams(window.location.search);
      const postNumber = queryParams.get('postNumber');
      
      const response = await fetch(`/api/getPostData?postNumber=${postNumber}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.postData = await response.json();
    }

    goBack() {
      window.location.href = "/community";
    }

    attachEventListeners() {
      document.getElementById("back-button").addEventListener("click", () => this.goBack());
    }
  
    async getHtml() {
        await this.loadPostData();
        const { title = "", author = "", content = "", timestamp = "" } = this.postData || {};
      
        return `
          <main>
            <h2>제목: ${title}</h2>
            <p>작성자: ${author}</p>
            <p>작성일: ${timestamp}</p>
            <br>
            <h3>내용</h3>
            <p>${content}</p>
            <br>
            <button id="back-button">뒤로가기</button>
          </main>
          <footer>
            <p>&copy; 2023 뤼튼(Wrtn) Technologies. All rights reserved.</p>
          </footer>
        `;
      }
}
