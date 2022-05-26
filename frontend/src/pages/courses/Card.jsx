import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../main'
import styles from './Card.module.sass'

function Card({ id, title, video, description, preview }) {
	const navigate = useNavigate()
	const { courseStore } = useContext(Context)

	const handleAddCourse = async () => {
		await courseStore
			.addCourseToUser(id)
			.then(() => navigate(`/courses/course/${id}`))
	}

	return (
		<div className={styles.card}>
			<div onClick={() => navigate(`/courses/course/${id}`)}>
				<h1 className={styles.title}>{title.slice(0, 28)}...</h1>
				<img src={preview} className={styles.preview} />
				<span className={styles.description}>{description}</span>
			</div>
			<button className={styles.button} onClick={handleAddCourse}>
				Начать учиться
			</button>
		</div>
	)
}

export default Card
