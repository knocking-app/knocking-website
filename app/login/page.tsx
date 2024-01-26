import styles from './login.module.css';
import Link from 'next/link';


export default function login() {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <h1 className={styles.title}>Login</h1>
                <form className={styles.form}>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="login">Login:</label>
                        <input className={styles.input} type="text" name="login" id="login"/>
                    </div>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="password">Password:</label>
                        <input className={styles.input} type="password" name="password" id="password" />
                    </div>
                    <div className={styles.row}>
                        <button className={styles.button}>Log In</button>
                    </div>
                    <div className={`${styles.row} ${styles.rowSignup}`}>
                        New to knocking? <Link href="/signup">Create an account</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}