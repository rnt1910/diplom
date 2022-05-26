import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'

import styles from './Registration.module.sass'
import image from '../../assets/riderocket.png'
import { Context } from '../../main'

function Registration() {
	const { state } = useLocation()
	const { userStore } = useContext(Context)
	const navigate = useNavigate()

	const [form, setForm] = useState({
		email: '',
		password: '',
		username: '',
	})

	const handleRegistration = async e => {
		e.preventDefault()
		const { email, password, username } = form
		const reg = await userStore.registration(email, password, username)
		if (reg) {
			navigate('/courses')
		}
	}

	return (
		<div className={styles.container}>
			<img src={image} className={styles.image} />
			<img src={image} className={styles.blur} />
			<div className={styles.form}>
				<span className={styles.title}>Создайте свой профиль</span>

				<Input
					placeholder={'Имя пользователя'}
					type={'text'}
					value={form.username}
					action={e => {
						setForm({ ...form, username: e.target.value })
					}}
				/>
				<Input
					placeholder={'Логин'}
					type={'email'}
					value={state ? state : form.email}
					action={e => {
						setForm({ ...form, email: e.target.value })
					}}
				/>
				<Input
					placeholder={'Пароль'}
					type={'password'}
					value={form.password}
					action={e => {
						setForm({ ...form, password: e.target.value })
					}}
				/>

				<Button onClick={handleRegistration}>Отправить</Button>

				<Link to={'/login'} className={styles.link}>
					У вас уже есть профиль? Войдите
				</Link>
			</div>
		</div>
	)
}

export default Registration
