import { useContext, useEffect, useState } from 'react'
import { Context } from '../../main'
import Card from '../courses/Card'
import CourseNav from '../courses/CourseNav'
import { PREVIEWS } from '../courses/Courses'
import styles from '../courses/Courses.module.sass'

function Study() {
	const { courseStore } = useContext(Context)
	const [userCourses, setUserCourses] = useState([])

	useEffect(() => {
		const getUserCourses = async () => {
			await courseStore.getUserCourses().then(res => setUserCourses(res))
		}
		getUserCourses()
	}, [])

	return (
		<>
			<CourseNav />
			<div className={styles.content}>
				<div className={styles.courses}>
					{userCourses &&
						userCourses.map((item, index) => {
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

export default Study
