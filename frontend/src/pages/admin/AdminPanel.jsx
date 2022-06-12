import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import YouTube from 'react-youtube'
import { Context } from '../../main'
import CourseNav from '../courses/CourseNav'
import styles from './AdminPanel.module.sass'

const URL_REGEXP = new RegExp(
	/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi
)

function AdminPanel() {
	const navigate = useNavigate()
	const { courseStore } = useContext(Context)
	const [isVideoVisible, setIsVideoVisible] = useState(false)
	const [url, setUrl] = useState('')
	const [videoId, setVideoId] = useState('')
	const [preview, setPreview] = useState(null)
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')

	const handleChangeUrl = e => {
		setUrl(e.target.value)
	}

	const setVideoVisibility = () => {
		const id = url.split('=')[1].split('&')[0]
		setVideoId(id)
		setIsVideoVisible(true)
	}

	const createCourse = async e => {
		const formData = new FormData()
		formData.append('title', title)
		formData.append('image', preview)
		formData.append('description', description)
		formData.append('video', videoId)
		await courseStore.createCourse(formData).then(() => navigate('/courses'))
	}

	return (
		<>
			<CourseNav />
			<div className={styles.content}>
				<h1>Создать новый курс</h1>
				<input
					type='text'
					className={styles.input}
					placeholder='Название'
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<input
					placeholder='Видео URL'
					type='url'
					className={styles.input}
					value={url}
					onChange={handleChangeUrl}
					onBlur={setVideoVisibility}
					onFocus={() => setIsVideoVisible(false)}
				/>
				{isVideoVisible && <YouTube videoId={videoId} />}
				<input
					type='text'
					className={styles.input}
					placeholder='Описание'
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
				<input
					type='file'
					name='image'
					onChange={e => setPreview(e.target.files[0])}
				/>
				<button className={styles.button} onClick={createCourse}>
					Создать
				</button>
			</div>
		</>
	)
}

export default AdminPanel
