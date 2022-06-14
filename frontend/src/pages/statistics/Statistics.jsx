import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect } from 'react'
import { Context } from '../../main'
import CourseNav from '../courses/CourseNav'

import styles from './Statistics.module.sass'
import StatItem from './StatItem'

const Statistics = observer(() => {
	const { courseStore } = useContext(Context)

	useEffect(() => {
		const getCourses = async () => {
			await courseStore.getCreatedByAdminCourses()
		}
		getCourses()
	}, [courseStore.statistics.length])

	return (
		<>
			<CourseNav />
			<div className={styles.container}>
				{courseStore.statistics &&
					courseStore.statistics.map(item => (
						<StatItem item={item} key={item.id} />
					))}
			</div>
		</>
	)
})

export default Statistics
