// Community.js

export default class {
    constructor() {
        document.title = "Community";
    }
    
    async getHtml() {
        return `
        <link rel="stylesheet" href="static/css/community.css">
        <header>
            <h1>게시판</h1>
        </header>
        <main>
            <table>
                <thead>
                    <tr>
                        <th>게시물 번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성날짜</th>
                        <th>내용</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <button onclick="location.href='/postAdd'">게시물 작성</button>
            <button id="updateBtn">게시물 수정</button>
            <button id="deleteBtn">게시물 삭제</button>
        </main>
        <footer>
            <p>&copy; 2023 뤼튼(Wrtn) Technologies. All rights reserved.</p>
        </footer>
        `;
    }
}
