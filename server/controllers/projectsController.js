const express = require('express')

const projectsController = {}

projectsController.index = (req, res) => {
    const projects = [{
        title: 'Dashboard',
        slug: 'dashboard',
        tags: ['html', 'css', 'javascript', 'php'],
        date: '5/10/2020',
        img: 'https://cdn.dribbble.com/users/1593845/screenshots/11350256/media/31b00ecd0c4252d1528f5325b8c7302d.jpg'
    },
    {
        title: 'Banking App',
        slug: 'banking-app',
        tags: ['html', 'css', 'javascript', 'MongoDB', 'python'],
        date: '5/10/2020',
        img: 'https://cdn.dribbble.com/users/3454560/screenshots/11358171/media/5eafc9da8f703c504afe07df4c43ee2a.png'
    },
    {
        title: 'Food Delivery App',
        slug: 'food-delivery-app',
        tags: ['html', 'css', 'javascript', 'jquery'],
        date: '5/10/2020',
        img: 'https://cdn.dribbble.com/users/110372/screenshots/11357787/media/76648b049612249c3c7c5582c9cec69a.png'
    },
    {
        title: 'Stock Market App',
        slug: 'stock-market-app',
        tags: ['html', 'css', 'javascript', 'python', 'node'],
        date: '5/10/2020',
        img: 'https://cdn.dribbble.com/users/452635/screenshots/11108566/media/794c3d130d009bdb0c40105bd8c7e1c9.png'
    },
    {
        title: 'Garden Tools App',
        slug: 'garden-tools-app',
        tags: ['html', 'css', 'javascript', 'MongoDB'],
        date: '5/10/2020',
        img: 'https://cdn.dribbble.com/users/992274/screenshots/11318054/media/0d6771483c6e302c0abe752f564f1b68.jpg'
    },{
        title: 'Pokemon API App',
        slug: 'pokemon-api-app',
        tags: ['html', 'css', 'javascript', 'python'],
        date: '5/10/2020',
        img: 'https://cdn.dribbble.com/users/113499/screenshots/11353869/media/f2aec6d513bc98f4fed875f76ef284a4.png'
    }]
    
    res.render('projects/index', {
        projects: projects 
    })
}

projectsController.create = (req, res) => {
    res.render('projects/create')
}

projectsController.store = (req, res) => {
    res.send({
        saved: true
    })
}

projectsController.show = (req, res) => {
    res.render('projects/show')
}

projectsController.edit = (req, res) => {
    res.render('projects/edit')
}

projectsController.update = (req, res) => {
    res.send({
        updated: true
    })
}

projectsController.destroy = (req, res) => {
    res.send({
        deleted: true
    })
}



module.exports = projectsController