import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../main'
import CourseNav from '../courses/CourseNav'
import YouTube from 'react-youtube'

import styles from './CoursePage.module.sass'

function CoursePage() {
	const params = useParams()
	const { courseStore } = useContext(Context)
	const [course, setCourse] = useState({})

	console.log(course)

	useEffect(() => {
		const getCourse = async () => {
			await courseStore.getCourse(params.id).then(course => setCourse(course))
		}
		getCourse()
	}, [])

	return (
		<>
			<CourseNav />
			<div className={styles.content}>
				<h1 className={styles.title}>{course.title}</h1>
				<YouTube videoId={course.video} iframeClassName={styles.video} />
				<h1>Описание:</h1>
				<span className={styles.description}>{course.description}</span>
			</div>
		</>
	)
}

export default CoursePage
