import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import { useAppSelector } from '../app/hooks';
import { selectSearch } from './../components/search/searchSlice';

export default function Header() {
    const selectPhrase = useAppSelector(selectSearch);

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
                <ul className = { styles.navigationList }>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            phrase:{selectPhrase} 
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}