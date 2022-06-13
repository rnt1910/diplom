import Counter from '../../components/counter/Counter'
import Navbar from '../../components/navbar/Navbar'
import styles from './About.module.sass'

function About() {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.content}>
					<h1 className={styles.title}>
						Миссия OZON LEARNING — дать возможность каждому быть актуальным и
						востребованным специалистом прямо сейчас. Вне зависимости от
						возраста и географии.
					</h1>
					<div className={styles.counters}>
						<Counter title={'Курсов'}>700</Counter>
						<Counter title={'Кураторов'}>150</Counter>
						<Counter title={'Пользователей'}>244 000</Counter>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
