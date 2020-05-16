const express = require('express')
const PostModel = require('../models/Post').model

const blogController = {}

blogController.index = (req, res) => {
    res.render('blog/index')
}

blogController.show = (req, res) => {
    res.render('blog/show')
}

blogController.create = (req, res) => {
    res.render('blog/create')
}

blogController.store = (req, res) => {
    PostModel.create({
        title: 'My First Post',
        description: 'Hey this is a cool post about nothing'   
    }, function (err, data){
        console.log(data)
    })
}

module.exports = blogController