import { makeAutoObservable } from 'mobx'
import { $authHost, $host } from '../http'

export default class CourseStore {
	courses = []
	userCourses = []
	course = {}
	statistics = []

	constructor() {
		makeAutoObservable(this)
	}

	setCourses(courses) {
		this.courses = courses
	}

	setStatistics(stats) {
		this.statistics = stats
	}

	setUserCourses(userCourses) {
		this.userCourses = userCourses
	}

	setCourse(course) {
		this.course = course
	}

	async getAllCourses() {
		try {
			const { data } = await $host.get('api/courses')
			this.setCourses(data)
			return data
		} catch (error) {
			console.log(error.message)
		}
	}

	async addCourseToUser(id) {
		try {
			const { data } = await $authHost.get(`api/courses/id/add?id=${id}`)
			this.setUserCourses(data)
			return data
		} catch (error) {
			console.log(error.message)
		}
	}

	async getUserCourses() {
		try {
			const { data } = await $authHost.get(`api/courses/user/courses`)
			this.setUserCourses(data)
			return data
		} catch (error) {
			console.log(error.message)
		}
	}

	async getCourse(id) {
		try {
			const { data } = await $host.get(`api/courses/id?id=${id}`)
			this.setCourse(data)
			return data
		} catch (error) {
			console.log(error.message)
		}
	}

	async createCourse(form) {
		try {
			const { data } = await $authHost.post(`api/courses/add`, form, {
				headers: { 'Content-Type': 'multipart/form-data' },
			})
			this.setCourse(prev => [...prev, data])
			return data
		} catch (error) {
			console.log(error.message)
		}
	}

	async removeCourse(id) {
		try {
			await $authHost.get(`api/courses/id/remove?id=${id}`)
			this.setUserCourses(this.userCourses.filter(item => item.id != id))
			return this.userCourses
		} catch (error) {
			console.log(error.message)
		}
	}

	async getCreatedByAdminCourses(id) {
		try {
			const { data } = await $authHost.get(
				'api/courses/get-admins-courses/stats'
			)
			this.setStatistics(data)
			return data
		} catch (error) {
			console.log(error.message)
		}
	}
}
