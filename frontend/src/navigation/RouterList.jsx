import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import { observer } from 'mobx-react-lite'
import { Context } from '../main'

import PrivateRoute from './PrivateRoute'

import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Courses from '../pages/courses/Courses'
import Setting from '../pages/settings/Setting'
import Study from '../pages/study/Study'
import About from '../pages/about/About'
import Companies from '../pages/companies/Companies'
import Registration from '../pages/regisatration/Registration'
import CoursePage from '../pages/course_page/CoursePage'
import AdminRoute from './AdminRoute'
import AdminPanel from '../pages/admin/AdminPanel'

const RouterList = observer(() => {
	const { userStore } = useContext(Context)
	const navigate = useNavigate()

	useEffect(() => {
		const checkAuth = async () => {
			if (localStorage.getItem('token')) {
				const check = await userStore.check()
				if (check) {
					navigate('/courses', { replace: true })
				}
			}
		}
		checkAuth()
	}, [])

	return (
		<Routes>
			<Route path={'/login'} element={<Login />} />
			<Route path={'/registration'} element={<Registration />} />
			<Route path={'/'} element={<Home />} />
			<Route path={'/companies'} element={<Companies />} />
			<Route path={'/about'} element={<About />} />
			<Route
				path={'/courses'}
				element={
					<PrivateRoute>
						<Courses />
					</PrivateRoute>
				}
			/>
			<Route
				path={'/courses/course/:id'}
				element={
					<PrivateRoute>
						<CoursePage />
					</PrivateRoute>
				}
			/>
			<Route
				path={'/courses/settings'}
				element={
					<PrivateRoute>
						<Setting />
					</PrivateRoute>
				}
			/>
			<Route
				path={'/courses/study'}
				element={
					<PrivateRoute>
						<Study />
					</PrivateRoute>
				}
			/>
			<Route
				path={'/courses/dashboard'}
				element={
					<PrivateRoute>
						<AdminRoute>
							<AdminPanel />
						</AdminRoute>
					</PrivateRoute>
				}
			/>
		</Routes>
	)
})

export default RouterList
