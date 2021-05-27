const mongoose = require('mongoose')
const Schema = mongoose.Schema
const VideoSchema = new Schema({
    _id: {
            type: String,
            lowercase: true
  },
  educator:{
    type: String,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
},
  title: String,
  description: String,
  duration: String,
  video_url: String,
  thumbnail_url:String,
  likes: Number,
  views: Number
})
module.exports = mongoose.model('Videos', VideoSchema)


// required: true,
// unique: true