const express = require('express')
const PostModel = require('../models/Post').model
const slugify = require('../global/slugify')
const blogController = {}

blogController.index = (req, res) => {

    //Find all the post
    PostModel.find({}, function(err, data){

        if(err) {
            console.log("Error can't find the posts")
        } else {
            console.log(data)
            res.render('blog/index', {
                posts: data
     }) 
        }
       
    })

    
}

blogController.show = (req, res) => {
    PostModel.find({slug: req.params.slug}, function(err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
            res.render('blog/show', {
                post: data[0]
        })
        }
    })
    
}

blogController.create = (req, res) => {
    res.render('blog/create')
}

blogController.store = (req, res) => {
        PostModel.create({
            title: req.body.title,
            category: req.body.category,
            description: req.body.description,
            slug: slugify(req.body.title)}, 
                function(err, data){
                    if(err) {
                        console.log('Error cannot save post' + err)
                    } else {
                        console.log(data)
                        res.redirect('/blog')
                    }
                }
        )}   
        
 
blogController.edit = (req, res) => {
        PostModel.find({slug: req.params.slug}, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                console.log(data)
                res.render('blog/edit', {
                    post: data[0]
            })
            }
        })
        
    }
        
blogController.update = (req, res) => {
    PostModel.findOneAndUpdate({
        _id: req.body._id},{$set:{
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        slug: slugify(req.body.title)
        }}, 
            function(err, data){
                if(err) {
                    res.redirect(303,'/blog')
                    console.log('Error cannot save post')
                } else {
                    console.log('UPDATE DATA: ==============================================')
                    console.log(data)
                    console.log('===========================================================')
                    res.redirect(303,'/blog')
                }
            }
      )
}  

blogController.destroy = (req, res) => {
    PostModel.remove({
        slug: req.params.slug}, function (err) {
            if (err) return handleError(err);
                console.log('deleted')
                res.redirect('/blog')
        })
        
} 



module.exports = blogController