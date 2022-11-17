const Text = require('../models/text.model')

const createText = async (req, res, next) => {
  try {
    // grab text from the request
    const { title } = req.body
    // create blog object
    const newText = new Text({
      title
    })
    // save to database
    const createdText = await newText.save()

    // return response
    return res.status(201).json({
      status: 'success',
      data: createdText,
    })
  } catch (err) {
    err.source = 'creating a Text'
    next(err)
  }
}

const getTexts = async (req, res, next) => {
  Text.find({})
      .then((text) => {
          res.status(200).json({
            status: 'success',
            data: text
          })
      }).catch((err) => {
          console.log(err)
          res.status(500).send(err)
      })
}

// const getTexts = async (req, res, next) => {
//   try {
//     const text = await Text
//     Text.find({})

//     return res.json({
//       status: 'success',
//       data: text
//     })
//   } catch (err) {
//     err.source = 'get Text'
//     next(err)
//   }
// }



const deleteText = async (req, res, next) => {
  try {
    const deletedText = await Text.deleteMany

    if (!deletedText) {
      return res.status(404).json({
        status: 'fail',
        error: 'Text not deleted!'
      })
    }

    res.json({
      status: 'success',
      data: deletedText
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  createText,
  getTexts,
  deleteText,
}
