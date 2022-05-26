import { useEffect, useState } from 'react'

import styles from './Button.module.sass'

function Button({ children, type, onClick }) {

    const [styleType, setStyleType] = useState('')

    useEffect(() => {
        setStyleType(type)
    }, [])

    return (
        <button
            type='submit'
            onClick={onClick}
            className={
                styleType === 'outlined'
                    ? styles.outlined
                    : styles.colored
            }
        >
            {children}
        </button>
    )

}

export default Button