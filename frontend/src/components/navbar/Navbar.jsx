import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Avatar from '../../assets/ava.jpg'
import { Context } from '../../main'
import Burger from './Burger'
import Cross from './Cross'
import styles from './Navbar.module.sass'

const Navbar = observer(() => {
	const [isOpened, setIsOpened] = useState(false)
	const { userStore } = useContext(Context)
	const navigate = useNavigate()

	const toggleBurger = () => {
		setIsOpened(!isOpened)
	}

	const showBurger = () => {
		if (window.innerWidth >= 680) {
			setIsOpened(false)
		}
	}

	useEffect(() => {
		showBurger()
	}, [])

	window.addEventListener('resize', showBurger)

	return (
		<div className={styles.navbar}>
			<div className={styles.container}>
				<Link to={'/'} className={styles.logo}>
					OZON
					<br />
					LEARNING
				</Link>
				<div
					onClick={toggleBurger}
					className={isOpened ? styles.cross : styles.burger}
				>
					{isOpened ? <Cross /> : <Burger />}
				</div>

				<div className={isOpened ? styles.active : styles.links}>
					{isOpened && (
						<Link to={'/'} className={styles.linkMobile}>
							Главная
						</Link>
					)}
					<Link
						to={'/courses'}
						className={isOpened ? styles.linkMobile : styles.link}
					>
						Курсы
					</Link>
					<Link
						to={'/companies'}
						className={isOpened ? styles.linkMobile : styles.link}
					>
						Компаниям
					</Link>
					<Link
						to={'/about'}
						className={isOpened ? styles.linkMobile : styles.link}
					>
						Об Ozon Learning
					</Link>
					{userStore.isAuth ? (
						!isOpened && (
							<button
								onClick={() => navigate('/courses/settings')}
								style={{
									border: 'none',
									background: 'none',
									outline: 'none',
									borderRadius: 50,
									cursor: 'pointer',
								}}
							>
								<img src={Avatar} className={styles.avatar} />
							</button>
						)
					) : (
						<Link
							to={'/login'}
							className={isOpened ? styles.linkMobile : styles.link}
						>
							Войти
						</Link>
					)}
				</div>
			</div>
		</div>
	)
})

export default Navbar
