export default class {
    constructor() {
        document.title = "PostAdd";
    }
    async getHtml() {
        const username = localStorage.getItem("username") || "";

        return `
        <header>
        <h1>게시물 작성</h1>
    </header>
    <main>
        <label for="title">제목:</label>
        <input type="text" id="title" name="title" required>
        <br><br>
        <label for="author">작성자:</label>
        <input type="text" id="author" name="author" required value="${username}" readonly>
        <br><br>
        <label for="content">내용:</label>
        <textarea id="content" name="content" rows="10" cols="50" required></textarea>
        <br><br>
        <button id="submit-button">작성</button>
        <button id="back-button">뒤로가기</button>
    </main>
    <footer>
        <p>&copy; 2023 뤼튼(Wrtn) Technologies. All rights reserved.</p>
    </footer>
        `;
    }
    
}
