const express = require("express");
const fs = require("fs");
const router = express.Router();

const dbPath = "./data/data.json"; // 데이터 경로 지정

// 게시물 데이터 가져오기
function getPostData() {
  try {
    const rawData = fs.readFileSync(dbPath);
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Error reading data.json:", error);
    return [];
  }
}

// 게시물 데이터 수정하기
function updatePostData(postNumber, updatedPost) {
  try {
    const postData = getPostData();
    const postIndex = postData.findIndex(p => p.postNumber === parseInt(postNumber, 10));

    if (postIndex >= 0) {
      postData[postIndex] = updatedPost;
      fs.writeFileSync(dbPath, JSON.stringify(postData, null, 2));
    } else {
      console.error(`Can't edit the post with postNumber ${postNumber}, as it doesn't exist`);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Error updating data.json:", error);
    return false;
  }
}

// 게시물 데이터 요청 처리
router.get("/api/getPostData", (req, res) => {
  console.log("게시글 수정시 게시글 요청 받음");
  const postNumber = req.query.postNumber;
  const postData = getPostData();
  const post = postData.find((p) => p.postNumber === parseInt(postNumber, 10));

  if (post) {
    res.json(post);
  } else {
    res.sendStatus(404);
  }
});

// 게시물 수정 요청 처리
router.put("/api/updatePost", (req, res) => {
  console.log("게시글 수정 요청 받음");
  const postNumber = req.body.postNumber;
  const updated_post = {
    postNumber: parseInt(postNumber, 10),
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,          // 작성자 데이터 추가
    timestamp: req.body.timestamp, // 작성날짜 데이터 추가
  };

  if (updatePostData(postNumber, updated_post)) {
    res.sendStatus(200); // 성공적으로 게시물을 수정했을 경우
  } else {
    res.sendStatus(500); // 게시물 수정에 실패한 경우
  }
});

module.exports = router;
