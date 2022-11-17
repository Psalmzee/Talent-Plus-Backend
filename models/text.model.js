const mongoose = require('mongoose')

const textSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    }
  }
)


module.exports = mongoose.model('Text', textSchema)
