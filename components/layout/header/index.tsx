import styles from './index.module.css';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/">Knocking</Link>
        </header>
    )
}