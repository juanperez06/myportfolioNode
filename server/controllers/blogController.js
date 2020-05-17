const express = require('express')
const PostModel = require('../models/Post').model

const blogController = {}

blogController.index = (req, res) => {

    //Find all the post
    PostModel.find({}, function(err, data){
     console.log(data)
     res.render('blog/index', {
         posts: data
     })   
    })
    
}

blogController.show = (req, res) => {
    res.render('blog/show')
}

blogController.create = (req, res) => {
    res.render('blog/create')
}

blogController.store = (req, res) => {
    PostModel.create({title: req.body.title, description: req.body.description}, function(err, data){
        console.log(data)
        res.send(data)
    })
}


module.exports = blogController