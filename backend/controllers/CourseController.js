const { Course, UserCourse, User } = require('../models/models')

class CourseController {
	async getAllCourses(req, res, next) {
		const courses = await Course.findAll({ where: {} })
		return res.json(courses)
	}

	async getCourse(req, res, next) {
		const { id } = req.query
		console.log(id)
		const course = await Course.findByPk(id)
		return res.json(course)
	}

	async getUserCourses(req, res, next) {
		const { id } = req.user
		const user = await User.findOne({ where: { id } })
		const courses = await user.getCourses()
		return res.json(courses)
	}

	async addCourse(req, res, next) {
		const { title, video, description } = req.body
		const course = await Course.create({
			title,
			video,
			description,
		})
		return res.json(course)
	}

	async addCourseToUser(req, res, next) {
		const { id } = req.query
		const course = await Course.findByPk(id)
		await course.setUsers(req.user.id)
		return res.json(course)
	}
}

module.exports = new CourseController()
