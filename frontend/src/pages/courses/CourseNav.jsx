import { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { Context } from '../../main'
import styles from './CourseNav.module.sass'

function CourseNav() {
	const { user } = useAuth()
	const { userStore } = useContext(Context)
	const { pathname } = useLocation()

	return (
		<nav className={styles.nav}>
			<Link to={'/'} className={styles.title}>
				<h1>
					OZON
					<br />
					LEARNING
				</h1>
			</Link>
			<div>
				<h2 className={styles.user}>{user.username}</h2>
				<h3 className={styles.email}>Роль: {user.role}</h3>
				<h3 className={styles.email}>{user.email}</h3>
				<hr />
				{user.role === 'admin' && (
					<Link to='/courses/dashboard' className={styles.link}>
						<h2
							className={styles.text}
							style={
								pathname === '/courses/dashboard'
									? { fontWeight: 700 }
									: { fontWeight: 100 }
							}
						>
							Создать курс
						</h2>
					</Link>
				)}
				<Link to='/courses' className={styles.link}>
					<h2
						className={styles.text}
						style={
							pathname === '/courses'
								? { fontWeight: 700 }
								: { fontWeight: 100 }
						}
					>
						Все курсы
					</h2>
				</Link>
				<Link to='/courses/study' className={styles.link}>
					<h2
						className={styles.text}
						style={
							pathname === `/courses/study`
								? { fontWeight: 700 }
								: { fontWeight: 100 }
						}
					>
						Обучение
					</h2>
				</Link>
				<Link to='/courses/settings' className={styles.link}>
					<h2
						className={styles.text}
						style={
							pathname === '/courses/settings'
								? { fontWeight: 700 }
								: { fontWeight: 100 }
						}
					>
						Настройки
					</h2>
				</Link>
				<button onClick={() => userStore.logout()} className={styles.button}>
					<h2>Выйти</h2>
				</button>
			</div>
		</nav>
	)
}

export default CourseNav
