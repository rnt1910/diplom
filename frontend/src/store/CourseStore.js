import { makeAutoObservable, toJS } from 'mobx'
import { $authHost, $host } from '../http'

export default class CourseStore {
	courses = []
	userCourses = []
	course = {}

	constructor() {
		makeAutoObservable(this)
	}

	setCourses(courses) {
		this.courses = courses
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
}
