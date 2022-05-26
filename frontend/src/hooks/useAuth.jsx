import { toJS } from 'mobx'
import { useContext } from 'react'
import { Context } from '../main'

const useAuth = () => {
	const { userStore } = useContext(Context)

	return toJS(userStore.user)
}

export default useAuth
