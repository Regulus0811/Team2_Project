export default class RePostAdd {
    constructor() {
      document.title = "RePostAdd";
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

    async submitForm() {
      const title = document.getElementById("title").value;
      const content = document.getElementById("content").value;
      const queryParams = new URLSearchParams(window.location.search);
      const postNumber = queryParams.get("postNumber");

      // 작성자 정보 가져오기
      const author = document.getElementById("author").value;

      // 작성날짜 가져오기
      const timestamp = new Date().toLocaleString();

      const response = await fetch(`/api/updatePost`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          postNumber: postNumber,
          title: title,
          content: content,
          author: author,        // 작성자 추가
          timestamp: timestamp, // 작성날짜 추가
        })
      });

      if (response.ok) {
        window.location.href = "/community";
      } else {
        alert("게시물 수정에 실패했습니다.");
      }
    }

    goBack() {
      window.location.href = "/community";
    }

    attachEventListeners() {
      document.getElementById("submit-button").addEventListener("click", () => this.submitForm());
      document.getElementById("back-button").addEventListener("click", () => this.goBack());
    }
  
    async getHtml() {
      await this.loadPostData();
      const { title = "", author = "", content = "" } = this.postData || {};
  
      return `
        <header>
          <h1>게시물 수정</h1>
        </header>
        <main>
          <label for="title">제목:</label>
          <input type="text" id="title" name="" required value="${title}">
          <br><br>
          <label for="author">작성자:</label>
          <input type="text" id="author" name="author" required value="${author}" readonly>
          <br><br>
          <label for="content">내용:</label>
          <textarea id="content" name="content" rows="10" cols="50" required>${content}</textarea>
          <br><br>
          <button id="submit-button">수정</button>
          <button id="back-button">뒤로가기</button>
        </main>
        <footer>
          <p>&copy; 2023 뤼튼(Wrtn) Technologies. All rights reserved.</p>
        </footer>
      `;
    }
}
