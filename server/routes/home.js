const express = require('express');
const router = express.Router();

const messages = [
  {
    name: "Amando",
    message: "Hi there!",
    added: new Date()
  },
  {
    name: "Charles",
    message: "Hello World!",
    added: new Date()
  }
];

router.post('/getMessages', (req, res) => {
  const content = req.body

  console.log(req.body)

  messages.push({
    name: content.name,
    message: content.message,
    added: new Date()  
  })
}) 

/* GET home page. */
router.get('/messages', function(req, res) {
  res.send(messages)
});

module.exports = router;
