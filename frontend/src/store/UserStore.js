import { makeAutoObservable } from 'mobx'
import { $authHost, $host } from '../http/index'

export default class UserStore {
	user = null
	isAuth = false

	constructor() {
		makeAutoObservable(this)
	}

	setIsAuth(bool) {
		this.isAuth = bool
	}

	setUser(user) {
		this.user = user
	}

	async registration(email, password, username) {
		try {
			const { data } = await $host.post('api/auth/registration', {
				email,
				password,
				username,
			})

			await localStorage.setItem('token', data.token)
			this.setIsAuth(true)
			this.setUser(data)
			return data
		} catch (error) {
			console.log(error.message)
		}
	}

	async login(email, password) {
		try {
			const { data } = await $host.post('api/auth/login', { email, password })
			await localStorage.setItem('token', data.token)
			this.setIsAuth(true)
			this.setUser(data)
			return data
		} catch (error) {
			console.log(error.message)
		}
	}

	async check() {
		try {
			const { data } = await $authHost.get('api/auth/check')
			await localStorage.setItem('token', data.token)
			this.setIsAuth(true)
			this.setUser(data)
			return data
		} catch (error) {
			console.log(error.message)
		}
	}

	async logout() {
		try {
			await localStorage.removeItem('token')
			this.setIsAuth(false)
			this.setUser({})
		} catch (error) {
			console.log(error.message)
		}
	}

	async changeUsername(username) {
		try {
			const { data } = await $authHost.post('api/user/update', { username })
			this.setUser(data)
			return data
		} catch (error) {
			console.log(error.message)
		}
	}
}
