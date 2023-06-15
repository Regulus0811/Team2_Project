const fs = require("fs");
const express = require("express");
const router = express.Router();

const dbPath = "./data/user.json";

function loginUser(id, passwd) {
    const users = JSON.parse(fs.readFileSync(dbPath, "utf8"));
    for (const user of users) {
        if (user.id === id && user.passwd === passwd) {
            return user.name;
        }
    }
    return false;
}

function registerUser(name, id, passwd) {
    let users;
    if (fs.existsSync(dbPath)) {
        const fileContents = fs.readFileSync(dbPath, "utf8");
        if (fileContents === "") {
            users = [];
        } else {
            users = JSON.parse(fileContents);
        }
    } else {
        users = [];
    }

    for (const user of users) {
        if (user.id === id) {
            return false; // 아이디 중복
        }
    }

    users.push({ name, id, passwd });
    fs.writeFileSync(dbPath, JSON.stringify(users));
    return true; // 회원가입 성공
}


// 로그인할때
router.post("/login", (req, res) => {
    const { action, name, id, passwd } = req.body;

    if (action === "login") {
        const userName = loginUser(id, passwd);
        if (userName) {
            res.status(200).json({
                success: true,
                message: "로그인에 성공하였습니다.",
                username: userName,
            });
        } else {
            res.status(400).json({
                success: false,
                message: "ID 또는 비밀번호가 올바르지 않습니다.",
            });
        }
    } else if (action === "register") {
        if (registerUser(name, id, passwd)) {
            res.status(200).json({
                success: true,
                message: "회원가입에 성공하였습니다.",
            });
        } else {
            res.status(400).json({
                success: false,
                message: "회원가입에 실패하였습니다. ID가 중복되었습니다.",
            });
        }
    } else {
        res.status(400).json({
            success: false,
            message: "알 수 없는 액션입니다.",
        });
    }
});

module.exports = router;
