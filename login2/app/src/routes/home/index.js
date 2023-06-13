// 라우팅 파일
'use strict'

const express = require("express");
const router = express.Router(); // express의 라우터를 불러와줘야함

const ctrl = require("./home.ctrl") // home.ctrl 모듈 불러오기 -> hello와 login을 써야하니까

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

// 프론트엔드가 전달한 로그인 데이터를 처리한다는 의미에서 process 오브젝로 만듬
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);

module.exports = router;
// 라우터를 사용할 수 있도록 외부로 내보내는 명령