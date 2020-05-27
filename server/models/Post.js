const mongoose = require('mongoose')
var Schema = mongoose.Schema;


const postSchema = new Schema({
    title: String,
    description: String,
    slug: String,
    category: String,
})

const Post = mongoose.model("Post", postSchema)


module.exports = {
    model: Post
}
