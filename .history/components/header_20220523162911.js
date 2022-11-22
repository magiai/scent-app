import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className = {styles.header}>
                <nav className = {styles.navigation}>
                    <Link href="/">

                        <Image 
                            src="/images/logo.png"
                            height={100}
                            width={100}
                            alt="Logo"
                        />

                    </Link>  
                    <Link href="/about">
                        About
                    </Link>
                </nav>
            </header>
    );
}