import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import Input from '../../components/input/Input'
import styles from './Login.module.sass'

import image from '../../assets/sit.png'

import { Context } from '../../main'
import { observer } from 'mobx-react-lite'

const Login = observer(() => {
	const { userStore } = useContext(Context)
	const navigate = useNavigate()

	const [form, setForm] = useState({
		email: '',
		password: '',
	})

	const handleLogin = async e => {
		e.preventDefault()
		const { email, password } = form
		const login = await userStore.login(email, password)
		if (login) {
			navigate('/courses')
		}
	}

	return (
		<div className={styles.container}>
			<img src={image} className={styles.image} />
			<img src={image} className={styles.blur} />
			<div className={styles.form}>
				<span className={styles.title}>Войдите в свой профиль</span>

				<Input
					placeholder={'Логин'}
					type={'email'}
					value={form.email}
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

				<Button onClick={handleLogin}>Войти</Button>

				<Link to={'/registration'} className={styles.link}>
					Ещё нет профиля? Зарегистрируйтесь
				</Link>
			</div>
		</div>
	)
})

export default Login
