const mongoose = require('mongoose')
const split = require('split-string')
var Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: String,
    slug: String,
    tags: [],
    date: {type: Date, default: Date.now},
    img: String
})


const Project = mongoose.model("Project", projectSchema)

module.exports = {
    model: Project
}