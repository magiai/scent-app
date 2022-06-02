import React from 'react';
import Footer from './footer';
import Header from './header';
import styles from './layout.module.css'

export default function Layout({
    children,
    home
  }: children: React.ReactNode
  ) {
    return (
        <div className = {styles.container}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}