import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import Navbar from '../../components/navbar/Navbar'
import styles from './Companies.module.sass'

function Companies() {
	const navigate = useNavigate()
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.title}>Корпоративное обучение для бизнеса</h1>
					<span>
						Подбираем и разрабатываем образовательные программы с учетом
						специфики ниши, целе и задач компании.
					</span>
					<Button onClick={() => navigate('/registration')}>
						Заказать обучние
					</Button>
				</div>
			</div>
		</>
	)
}

export default Companies
