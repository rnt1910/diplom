import { observer } from 'mobx-react-lite'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { Context } from '../../main'
import CourseNav from '../courses/CourseNav'

import styles from './Setting.module.sass'

const Setting = observer(() => {
	const [username, setUsername] = useState('')
	const { userStore } = useContext(Context)
	const { user } = useAuth()
	const navigate = useNavigate()

	const changeUsername = async () => {
		await userStore.changeUsername(username).then(() => navigate('/courses'))
	}

	return (
		<>
			<CourseNav />
			<div className={styles.content}>
				<h1>Сменить имя пользователя</h1>
				<input
					type='text'
					className={styles.input}
					placeholder={user.username}
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<button className={styles.button} onClick={changeUsername}>
					Изменить
				</button>
			</div>
		</>
	)
})

export default Setting
