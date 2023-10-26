import { ReactNode } from "react"
import styles from './index.module.css';

type Props = {
    children: ReactNode 
}

export default function Main({ children }: Props) {
    return (
        <main className={styles.main}>
            { children }
        </main>
    )
}