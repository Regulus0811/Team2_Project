const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/postLoad', (req, res) => {
  console.log('postLoad 요청 받음');
  const dbPath = './data/data.json';

  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading data.json:', err);
      res.status(500).send('Internal server error');
    } else {
      res.send(JSON.parse(data));
    }
  });
});

module.exports = router;
