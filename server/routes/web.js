const express = require('express')
const basicAuth = require('express-basic-auth')
const router = express.Router()
const pagesController = require('../controllers/pagesController')
const projectsController = require('../controllers/projectsController')
const blogController = require('../controllers/blogController')


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
router.get('/projects/:slug', projectsController.show)
router.get('/projects/:slug/edit', projectsController.edit)
router.post('/projects/:slug', projectsController.update)
router.delete('/projects/:slug', projectsController.destroy)


/* ==============================================================
Blog
=================================================================*/


router.get('/blog', blogController.index)
router.get('/blog/create', blogController.create)
router.get('/blog/:slug', blogController.show)
router.post('/blog', blogController.store)
router.get('/blog/:slug/edit', blogController.edit)
router.post('/blog/:slug', blogController.update)
router.get('/blog/:slug/delete', blogController.destroy)

/* ==============================================================
Admin
=================================================================*/

router.get('/admin', blogController.index)


module.exports = router