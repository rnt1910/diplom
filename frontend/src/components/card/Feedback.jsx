import styles from './Feedback.module.sass'

function Feedback({ image, title, description }) {
    return (
        <div className={styles.card}>
            <img src={image} className={styles.image} />
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.desc}>{description}</span>
        </div>
    )
}

export default Feedback