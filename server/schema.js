const mongoose = require('mongoose')

  // MongoDB Schema
  const messageSchema = new mongoose.Schema({
    name: String,
    message: String,
    country: String,
    added:  String 
  })
  
// Exporting the model
module.exports = mongoose.model('Message', messageSchema, 'messages')