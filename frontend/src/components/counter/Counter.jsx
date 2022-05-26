import styles from './Counter.module.sass'

function Counter({ children, title }) {
    return (
        <div className={styles.counter}>
            <span className={styles.count}>{children}</span>
            <span className={styles.title}>{title}</span>
        </div>
    )
}

export default Counter