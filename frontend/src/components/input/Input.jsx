import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Input.module.sass'

function Input(props) {
	const [value, setValue] = useState('')
	const navigate = useNavigate()

	const handleTyping = e => {
		setValue(e.target.value)
	}

	return (
		<div className={styles.input}>
			<input
				placeholder={props.placeholder}
				type={props.type}
				onChange={props.action}
				className={styles.inputField}
				defaultValue={props.value}
			/>
			{props.button && (
				<button
					className={styles.button}
					onClick={() => navigate('/registration', { state: props.state })}
				>
					Начать
				</button>
			)}
		</div>
	)
}

export default Input
