import React from 'react'
import { LOCALHOST } from '../../../config'
import styles from './StatItem.module.sass'
import avatar from '../../assets/ava.jpg'
import { useNavigate } from 'react-router-dom'

const StatItem = ({ item }) => {
	const navigate = useNavigate()
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{item.title}</h1>

			<div className={styles.stats}>
				<img
					src={LOCALHOST + item.preview}
					className={styles.preview}
					onClick={() => navigate(`/courses/course/${item.id}`)}
				/>

				<div className={styles.users}>
					<h1>
						Пользователи, начавшие обучение:{' '}
						<span
							style={{
								color: 'gray',
							}}
						>
							{item.users.length}
						</span>
					</h1>

					<div className={styles.items}>
						{item.users.map(user => (
							<div key={user.id} className={styles.user}>
								<img src={avatar} className={styles.avatar} />

								<p className={styles.username}>
									{user.username}
									<br />
									{user.email}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default StatItem
