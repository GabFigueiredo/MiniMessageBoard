const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Message = require('../schema');

// Function to push the data from client to db
async function run(content) {

  // Using the data from client to fill the schema
    const newMessage = new Message({
      name: content.name,
      message: content.message,
      country: content.country,
      added: new Date().toISOString().slice(0, 10)
  })
  
  // Validation to save message
  try {
    await newMessage.save()
    console.log("Data went to database, collection 'messages'!")
  } catch {
    console.log("Data could not go to database")
  }}

// Post route to receive content from client
router.post('/postMessages', (req, res) => {
  const content = req.body

    try {  // Run the fn
      run(content)
      res.status(200).send("Message sent succesfully")
    } catch(error) {
      res.status(500).send("Error on processing message", error.message)
    }
})

/* GET home page. */
router.get('/messages', async function(req, res) {
  try {
      const messages = await Message.find()
      res.json(messages)
  } catch (error) {
    res.status(500).json({error: error.message})
  }
 });

module.exports = { router, run };
