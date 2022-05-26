import { Navigate, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Context } from '../main'
import { useContext } from 'react'

const PrivateRoute = observer(({ children, ...rest }) => {
	const { userStore } = useContext(Context)
	const location = useLocation()

	return userStore.isAuth ? (
		children
	) : (
		<Navigate to={'/login'} state={{ from: location }} replace />
	)
})

export default PrivateRoute
