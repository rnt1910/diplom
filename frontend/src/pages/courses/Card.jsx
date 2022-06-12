import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../main'
import styles from './Card.module.sass'

const Card = ({ id, title, video, description, preview, children }) => {
	const navigate = useNavigate()
	const { courseStore } = useContext(Context)

	const handleAddCourse = async () => {
		await courseStore
			.addCourseToUser(id)
			.then(() => navigate(`/courses/course/${id}`))
	}

	return (
		<div className={styles.card}>
			<div>
				<h1 className={styles.title}>{title.slice(0, 28)}...</h1>
				<img src={preview} className={styles.preview} />
				<span className={styles.description}>{description}</span>
			</div>
			<div className={styles.cross}>{children}</div>
			<button className={styles.button} onClick={handleAddCourse}>
				Начать учиться
			</button>
		</div>
	)
}

export default Card
