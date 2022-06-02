import styles from './layout/layout.module.css'

export default function Layout({ children }) {
    return (
        <div className = {styles.container}>
            {children}
        </div>
    );
}