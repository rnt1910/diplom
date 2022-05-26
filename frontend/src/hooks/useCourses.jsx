import { toJS } from 'mobx'
import { useContext, useEffect } from 'react'
import { Context } from '../main'

const useCourses = () => {
	const { courseStore } = useContext(Context)

	return toJS(courseStore)
}

export default useCourses
