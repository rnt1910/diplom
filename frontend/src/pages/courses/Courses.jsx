import Card from './Card'
import CourseNav from './CourseNav'
import styles from './Courses.module.sass'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../main'
import { LOCALHOST } from '../../../config'

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
									preview={LOCALHOST + item.preview}
								/>
							)
						})}
				</div>
			</div>
		</>
	)
}

export default Courses
