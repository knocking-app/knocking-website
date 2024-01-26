import styles from './signup.module.css';
import { CaptchaResponse, LemmyHttp, Register } from 'lemmy-js-client'
import Image from 'next/image'

interface NewRegister extends Omit<Register, 'show_nsfw' | 'honeypot' | 'answer'> {}

async function getCaptcha(): Promise<CaptchaResponse | null> {
    const baseUrl = 'https://knocking.ru';
    const client: LemmyHttp = new LemmyHttp(baseUrl);
    const res = await client.getCaptcha();
    return res.ok || null
}

async function sendData(formData: FormData) {
    "use server";
    const baseUrl = 'https://knocking.ru';
    const client: LemmyHttp = new LemmyHttp(baseUrl);

    console.log(formData)
}

export default async function SignUp() {
    const captcha = await getCaptcha();
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <h1 className={styles.title}>SignUp</h1>
                <form className={styles.form} action={sendData}>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="login">Login:</label>
                        <input className={styles.input} type="text" name="username" id="login" placeholder="Enter your login..." />
                    </div>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="login">Email:</label>
                        <input className={styles.input} type="email" name="email" id="email" placeholder="Enter your email..." />
                    </div>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="password">Password:</label>
                        <input className={styles.input} type="password" name="password" id="password" placeholder="Enter password..." />
                    </div>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="password-repeat">Password repeat:</label>
                        <input className={styles.input} type="password" name="password_verify" id="password-repeat" placeholder="Enter password again..." />
                    </div>
                    <div className={styles.row}>
                    {
                        !!captcha ?
                            <>
                                <Image src={`data:image/png;base64,  ${captcha.png}`} alt="Captcha image" width="420" height="200" />
                                <input className={`${styles.input} ${styles.inputCaptcha}`} type="text" name="captcha_answer" id="captcha" placeholder="Enter captcha..." />
                                <input type="hidden" value={captcha.uuid} />
                            </> :
                            <p>Can&apos;t get captcha</p>
                    }
                    </div>
                    
                    <div className={styles.row}>
                        <button className={styles.button}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}