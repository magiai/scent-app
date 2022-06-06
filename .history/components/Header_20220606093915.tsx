import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import { selectSearch } from './../components/search/searchSlice';

export default function Header() {
    return (
        <header className = {styles.header}>
            <nav className = {styles.navigation}>
                <Link href="/">
                    <a>
                        <Image 
                            src = "/images/logo.png"
                            height = {60}
                            width = {60}
                            alt = "Logo"
                        />
                    </a>
                </Link>
                {selectSearch}  
                <Link href="/about">
                    <a>About</a>
                </Link>
            </nav>
        </header>
    );
}