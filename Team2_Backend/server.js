// server.js
// express server
// express 모듈 불러오기
const express = require("express");
const path = require("path");

// express 사용
const app = express();

// Express에 JSON 데이터를 처리하도록 설정
app.use(express.json());

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

// 로그인 post router
const loginRegisterRoutes = require('./routes/loginRegisterRoutes');
const postAddRoutes = require('./routes/postAddRoutes');
const postLoadRoutes = require('./routes/postLoadRoutes');
const postDeleteRoutes = require('./routes/postDeleteRoutes');

// 수정된 게시물 라우터 로드
const rePostAddRoutes = require('./routes/rePostAddRoutes');

// 미들웨어 사용
app.use('/', loginRegisterRoutes);  
app.use('/', postAddRoutes); 
app.use("/", postLoadRoutes); 
app.use("/", postDeleteRoutes);

// 수정된 게시물 라우터 사용
app.use("/", rePostAddRoutes);

// 이 부분을 미들웨어 라우터 아래로 이동
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

// port 생성, 서버 실행
app.listen(process.env.PORT || 3000, () => console.log("서버 구동"));
