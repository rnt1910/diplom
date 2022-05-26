import styles from './Card.module.sass'

function Card({ image, title, description }) {
    return (
        <div className={styles.card}>
            <img src={image} />
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.desc}>{description}</span>
        </div>
    )
}

export default Card