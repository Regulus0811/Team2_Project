// 서버를 가동시키는 곳
'use strict'

// 모듈
const express = require('express');
const app = express();

// 라우팅
const home = require("./src/routes/home")
// 만든 자바스크립트 파일을 불러오는 거기 때문에 폴더를 상대적으로 명시를 해줘야함

// 앱 세팅 -> 화면 뷰(HTML)를 처리해줄수 있는 뷰 엔진을 세팅해줌
app.set("views", "./src/views") // 두번째 파라미터로 화면 뷰를 관리해줄 파일이 저장된 폴더이름을 넘겨줌
app.set("view engine", "ejs");
// html 코드들을 어떤 엔진으로 해석 할지를 정해줄수있음 -> ejs사용(굉장히 많이 사용하는 뷰 엔진중 하나(html이라생각))

app.use(express.json());
// 원래 body-parser라는 모듈을 설치해서 사용해야 하지만, 현재는 express에 기능이 포함되어,
// express에 json데이터를 파싱해올수있도록 미들웨어를 등록하여 사용
app.use(express.urlencoded({extended: true}));
// URL을 통해서 전달되는 데이터에 한글, 공백, 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

app.use('/js',express.static(`${__dirname}/src/public/js`));
app.use('/css',express.static(`${__dirname}/src/public/css`));
// static 메서드로 정적 경로를 추가해줄거임
// ${__dirname}는 현재 app.js가 속해있는 디렉토리 위치를 반환
// login.ejs에서 js폴더로 접근을 하게되면, `${__dirname}/src/public` 이 위치로 접근을 하게 됨

app.use("/", home);
// use는 미들웨어를 등록해주는 메서드

module.exports = app;

