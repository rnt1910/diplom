import { Navigate, useLocation } from 'react-router-dom'
import { Context } from '../main'
import { useContext } from 'react'

const AdminRoute = ({ children, ...rest }) => {
	const { userStore } = useContext(Context)
	const location = useLocation()

	return userStore.user.role !== 'admin' ? (
		children
	) : (
		<Navigate to={'/courses'} state={{ from: location }} replace />
	)
}

export default AdminRoute
