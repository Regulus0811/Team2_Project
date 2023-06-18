// postAddRoutes.js
const fs = require('fs');
const express = require('express');
const router = express.Router();

const dbPath = './data/data.json';

router.post('/postAdd', (req, res) => {
    const post = req.body;
    console.log(`서버에서 게시물 정보 수신:`, post);

    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) {
            console.error('data.json 파일 읽기 중 오류 발생:', err);
            res.status(500).json({ message: '서버 내부 오류', error: err.message });
            return;
        }

        let savedData;
        try {
            savedData = JSON.parse(data);
        } catch (err) {
            console.error('JSON 데이터 변환 중 오류 발생:', err);
            res.status(500).json({ message: '서버 내부 오류', error: err.message });
            return;
        }

        savedData.push(post);

        fs.writeFile(dbPath, JSON.stringify(savedData, null, 2), 'utf-8', (err) => {
            if (err) {
                console.error('data.json 파일 쓰기 중 오류 발생:', err);
                res.status(500).json({ message: '서버 내부 오류', error: err.message });
                return;
            }

            console.log('게시물 정보가 data.json에 저장되었습니다.');
            res.status(201).json({ message: '게시물이 성공적으로 저장되었습니다.' });
        });
    });
});

module.exports = router;
