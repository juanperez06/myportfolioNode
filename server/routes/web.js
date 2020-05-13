const express = require('express')
const router = express.Router()
const pagesController = require('../controllers/pagescontroller.js')
const projectsController = require('../controllers/projectsController.js')
const blogController = require('../controllers/blogController.js')


/* ==============================================================
Pages
=================================================================*/


router.get('/', pagesController.homePage)

router.get('/about', pagesController.aboutPage)

router.get('/contact', pagesController.contact)

/* ==============================================================
Projects
=================================================================*/

router.get('/projects', projectsController.index)
router.get('/projects/create', projectsController.create)
router.post('/projects', projectsController.store)
router.get('/projects/:title', projectsController.show)
router.get('/projects/:title/edit', projectsController.edit)
router.put('/projects/:title', projectsController.update)
router.delete('/projects/:title', projectsController.destroy)


/* ==============================================================
Blog
=================================================================*/


router.get('/blog', blogController.index)
router.get('/blog/:title', blogController.show)

/* ==============================================================
Admin
=================================================================*/

router.get('/admin', blogController.index)


module.exports = router