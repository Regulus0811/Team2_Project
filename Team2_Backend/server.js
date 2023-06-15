// server.js
// express server
// express 모듈 불러오기
const express = require("express");
const path = require("path");

// express.Router() 사용
const router = express.Router();

// express 사용
const app = express();

// Express에 JSON 데이터를 처리하도록 설정
app.use(express.json());

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

// 로그인 post router
// const registerRoutes = require('./routes/registerRoutes');
const loginRegisterRoutes = require('./routes/loginRegisterRoutes');


//미들웨어 사용
app.use('/', loginRegisterRoutes);   


// port 생성 서버 실행
app.listen(process.env.PORT || 3000, () => console.log("서버 구동"));
