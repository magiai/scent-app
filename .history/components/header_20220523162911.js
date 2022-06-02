import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

export default function Header() {
    return (
        <header className = {styles.header}>
                <nav className = {styles.navigation}>
                    <Link href="/">
                        <a>
                            <Image 
                                src="/images/logo.png"
                                height={100}
                                width={100}
                                alt="Logo"
                            />
                        </a>
                    </Link>  
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </nav>
            </header>
    );
}