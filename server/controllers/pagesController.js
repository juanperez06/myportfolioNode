const express = require('express')

var pagesController = {};

pagesController.homePage = (req, res) => {
    res.render('pages/home')
}

pagesController.aboutPage = (req, res) => {
    res.render('pages/about')
}

pagesController.contact = (req, res) => {
    res.render('pages/contact')
}





module.exports = pagesController