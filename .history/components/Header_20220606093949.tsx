import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import { selectSearch } from './../components/search/searchSlice';

export default function Header() {
    return (
        <header className = {styles.header}>
            <nav className = {styles.navigation}>
                <Link href="/">

                    <Image 
                        src = "/images/logo.png"
                        height = {60}
                        width = {60}
                        alt = "Logo"
                    />

                </Link>
                <Link href="/about">
                    About
                </Link>
            </nav>
            <p>{selectSearch}</p>  

        </header>
    );
}