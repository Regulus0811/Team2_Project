// 모듈 불러오기
const express = require("express");
const path = require("path");

// express 사용
const app = express();

app.listen(3000, () => {
    console.log("서버 가동");
})

// /static 경로로 요청되는 파일을 frontend/static 디렉터리에서 제공하도록 설정
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.get('/', (req, res) => {
})

// 모든 경로로 들어오는 HTTP GET 요청에 대해 frontend/index.html 파일을 반환하도록 설정
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

// 3000번 포트로 서버 구동
app.listen(2000, () => console.log("서버 구동"));