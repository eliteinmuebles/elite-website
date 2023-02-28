import styles from './Market.module.css'

export const Market = () => {
    return (
        <>
        <h1 className={styles['title']}>Market</h1>
        <div className={styles["market"]}>
            <div className={styles["marketContainer"]}>
                <h3 className={styles["marketTitle"]}>Valencia</h3>
            </div>
            <div className={styles["marketContainer"]}>
                <h3 className={styles["marketTitle"]}>Valencia</h3>
            </div>
            <div className={styles["marketContainer"]}>
                <h3 className={styles["marketTitle"]}>Valencia</h3>
            </div>
            <div className={styles["marketContainer"]}>
                <h3 className={styles["marketTitle"]}>Valencia</h3>
            </div>
            <div className={styles["marketContainer"]}>
                <h3 className={styles["marketTitle"]}>Valencia</h3>
            </div>
        </div>
        </>
    )
}