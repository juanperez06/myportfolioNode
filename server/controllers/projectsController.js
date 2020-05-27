const express = require('express')
const ProjectModel = require('../models/Project').model
const slugify = require('../global/slugify')
const projectsController = {}

projectsController.index = (req, res) => {
    
    ProjectModel.find({}, function(err, data){

        if(err) {
            console.log("Error can't find the posts")
        } else {
            console.log(data)
            res.render('projects/index', {
                projects: data
     }) 
        }
       
    })
    
}

projectsController.create = (req, res) => {
    res.render('projects/create')
}

projectsController.store = (req, res) => {
    
    ProjectModel.create({
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        tags: req.body.tags,
        slug: slugify(req.body.title)}, 
            function(err, data){
                if(err) {
                    console.log('Error cannot save post' + err)
                } else {
                    console.log(data)
                    res.redirect('/projects')
                }
            }
    )}   
    

projectsController.show = (req, res) => {
    ProjectModel.find({slug: req.params.slug}, function(err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
            res.render('projects/show', {
                projects: data[0]
        })
        }
    })
}

projectsController.edit = (req, res) => {
    ProjectModel.find({slug: req.params.slug}, function(err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
            res.render('projects/edit', {
                projects: data[0]
        })
        }
    })
}

projectsController.update = (req, res) => {
    ProjectModel.findOneAndUpdate({
        _id: req.body._id},{$set:{
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        slug: slugify(req.body.title)
        }}, 
            function(err, data){
                if(err) {
                    res.redirect(303,'/projects')
                    console.log('Error cannot save post')
                } else {
                    console.log('UPDATE DATA: ==============================================')
                    console.log(data)
                    console.log('===========================================================')
                    res.redirect(303,'/projects')
                }
            }
      )
}

projectsController.destroy = (req, res) => {
    ProjectModel.remove({
        slug: req.params.slug}, function (err) {
            if (err) return handleError(err);
                console.log('deleted')
                res.redirect('/projects')
        })
}



module.exports = projectsController