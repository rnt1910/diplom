import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { LOCALHOST } from '../../../config'
import { Context } from '../../main'
import Card from '../courses/Card'
import CourseNav from '../courses/CourseNav'
import styles from '../courses/Courses.module.sass'
import DeleteCross from '../courses/DeleteCross'

const Study = observer(() => {
	const { courseStore } = useContext(Context)
	const [userCourses, setUserCourses] = useState([])

	useLayoutEffect(() => {
		const getUserCourses = async () => {
			await courseStore.getUserCourses()
		}
		getUserCourses()
	}, [])

	return (
		<>
			<CourseNav />
			<div className={styles.content}>
				<div className={styles.courses}>
					{courseStore.userCourses.length > 0 &&
						toJS(courseStore.userCourses).map((item, index) => {
							return (
								<Card
									key={item.id}
									id={item.id}
									title={item.title}
									video={item.video}
									description={item.description}
									preview={LOCALHOST + item.preview}
								>
									<DeleteCross
										onClick={() => courseStore.removeCourse(item.id)}
									/>
								</Card>
							)
						})}
				</div>
			</div>
		</>
	)
})

export default Study
