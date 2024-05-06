const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

const messages = [
  {
    name: "Amando",
    message: "Hi there!",
    country: "Armenia",
    added: new Date()
  },
  {
    name: "Charles",
    message: "Hello World!",
    country: "Greece",
    added: new Date()
  }
];

router.post('/postMessages', (req, res) => {
  const content = req.body

  console.log(req.body)

  messages.push({
    name: content.name,
    message: content.message,
    country: content.country,
    added: new Date()  
  })
}) 

/* GET home page. */
router.get('/messages', function(req, res) {
  res.send(messages)
});

module.exports = router;
