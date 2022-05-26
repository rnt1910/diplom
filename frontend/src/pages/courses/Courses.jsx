import Card from './Card'
import CourseNav from './CourseNav'
import styles from './Courses.module.sass'

import backend from '../../assets/backend.png'
import java from '../../assets/java.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../main'

export const PREVIEWS = [java, js, react, backend]

function Courses() {
	const { courseStore } = useContext(Context)
	const [courses, setCourses] = useState([])

	useEffect(() => {
		const getCourses = async () => {
			await courseStore.getAllCourses().then(res => setCourses(res))
		}
		getCourses()
	}, [])

	return (
		<>
			<CourseNav />
			<div className={styles.content}>
				<div className={styles.courses}>
					{courses &&
						courses.map((item, index) => {
							return (
								<Card
									key={item.id}
									id={item.id}
									title={item.title}
									video={item.video}
									description={item.description}
									preview={PREVIEWS[index]}
								/>
							)
						})}
				</div>
			</div>
		</>
	)
}

export default Courses
