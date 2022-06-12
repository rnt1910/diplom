import Button from '../../components/button/Button'
import Navbar from '../../components/navbar/Navbar'
import Counter from '../../components/counter/Counter'
import Input from '../../components/input/Input'
import Card from '../../components/card/Card'
import Feedback from '../../components/card/Feedback'

// assets
import background from '../../assets/background.png'
import prof from '../../assets/prof.png'
import courses from '../../assets/courses.png'
import education from '../../assets/education.png'
import leaders from '../../assets/leaders.png'
import avatar from '../../assets/ava.jpg'

const feedback =
	'В целом преподаватель позитивный, не пассует перед трудностями.Но ему всё же следует готовиться к семинарам, и заранее смотреть презентацию(продумывать ход занятия и возможные вопросы), а также выкладывать её для студентов на платформе.Не хватало условия задач перед глазами, при их решении на семинаре.Интересная и необычная фича - это правила клуба)'

import styles from './Home.module.sass'
import Footer from '../../layout/footer/Footer'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

function Home() {
	const [email, setEmail] = useState('')
	const navigate = useNavigate()

	const handleEmail = e => {
		setEmail(e.target.value)
	}

	return (
		<>
			<Navbar />
			<div className={styles.layout}>
				<div className={styles.container}>
					<div className={styles.welcome}>
						<div>
							<h1 className={styles.title}>
								Информационная
								<br />
								система
							</h1>

							<div className={styles.buttons}>
								<Button type={'outlined'} onClick={() => navigate('/courses')}>
									Программирование
								</Button>
								<Button type={'outlined'} onClick={() => navigate('/courses')}>
									Маркетинг
								</Button>
								<Button type={'outlined'} onClick={() => navigate('/courses')}>
									Дизайн
								</Button>
								<Button type={'outlined'} onClick={() => navigate('/courses')}>
									Игры
								</Button>
							</div>

							<div className={styles.description}>
								<span className={styles.bluetext}>Актуальные</span> знания от
								признанных экспертов рынка для{' '}
								<span className={styles.pinktext}>новичков</span> и практикующих
								специалистов.
							</div>

							<div className={styles.counters}>
								<Counter title={'Курсов'}>700</Counter>
								<Counter title={'Кураторов'}>150</Counter>
								<Counter title={'Пользователей'}>244 000</Counter>
							</div>

							<Input
								state={email}
								placeholder={'Почта'}
								type={'email'}
								button={true}
								action={handleEmail}
							/>
						</div>

						<img src={background} className={styles.background} />
					</div>

					<div className={styles.content}>
						<div className={styles.container}>
							<h1 className={styles.description}>
								На платформе можнополучить знания по актуальным темам и
								востребованные навыки. Все курсы нацелены на практику: мы следим
								за актуальностью материала и помогаем с трудоустройством и
								стажировкой.
							</h1>

							<div className={styles.cards}>
								<Card
									image={prof}
									title={'Профессии'}
									description={
										'Помогают полностью освоить профессию с нуля, собрать портфолио, подготовить резюме и найти работу.'
									}
								/>
								<Card
									image={courses}
									title={'Курсы'}
									description={
										'Позволяют получить конкретный навык или изучить инструмент.'
									}
								/>
								<Card
									image={education}
									title={'Высшее образование'}
									description={
										'Бакалавриат и магистратура совместно с ведущими вузами России. Диплом государственного образца.'
									}
								/>
								<Card
									image={leaders}
									title={'Лидеры изменений'}
									description={
										'Программа развития профессиональных компетенций и лидерских качеств от Ozon learning и ВШМ СПбГУ.'
									}
								/>
							</div>

							<h1 style={{ marginTop: 100, marginBottom: 50, fontSize: 64 }}>
								Отзывы об Ozon Learning
							</h1>

							<div className={styles.feedback}>
								<Feedback
									image={avatar}
									title={'Пользователь'}
									description={feedback}
								/>
								<Feedback
									image={avatar}
									title={'Пользователь'}
									description={feedback}
								/>
								<Feedback
									image={avatar}
									title={'Пользователь'}
									description={feedback}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default observer(Home)
