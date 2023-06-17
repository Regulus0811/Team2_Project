// postDeleteRoutes.js

const express = require('express');
const fs = require('fs');
const router = express.Router();
const dbPath = './data/data.json';

router.delete('/posts/:postNumber', (req, res) => {
  console.log("삭제요청받음");
  const postNumber = parseInt(req.params.postNumber);

  fs.readFile(dbPath, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading data file.');
    }

    const postsData = JSON.parse(data);
    const newPostsData = postsData.filter((post) => post.postNumber !== postNumber);

    fs.writeFile(dbPath, JSON.stringify(newPostsData), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error writing data file.');
      }

      res.status(200).send('Post deleted successfully.');
    });
  });
});

module.exports = router;
