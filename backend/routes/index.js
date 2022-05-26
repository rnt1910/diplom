const router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const CourseRouter = require('./CourseRouter')

router.use('/auth', AuthRouter)
router.use('/courses', CourseRouter)

module.exports = router
