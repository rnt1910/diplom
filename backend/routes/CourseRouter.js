const router = require('express').Router()
const CourseController = require('../controllers/CourseController')
const AuthMiddleware = require('../middleware/AuthMiddleware')

router.get('/', CourseController.getAllCourses)
router.get('/user/courses', AuthMiddleware, CourseController.getUserCourses)
router.get('/:course/add', AuthMiddleware, CourseController.addCourseToUser)
router.post('/add', CourseController.addCourse)
router.get('/:id', CourseController.getCourse)

module.exports = router
