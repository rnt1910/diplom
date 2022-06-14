import axios from 'axios'

export const API_URL = `http://ozon-learning.ru/`

const $host = axios.create({
	baseURL: API_URL,
})

const $authHost = axios.create({
	baseURL: API_URL,
})

const authInterceptor = async config => {
	const token = await localStorage.getItem('token')
	config.headers.authorization = `Bearer ${token}`
	return config
}

$authHost.interceptors.request.use(authInterceptor)

export { $host, $authHost }
