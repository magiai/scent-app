
import '../styles/variables.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            {/* <header>
                <nav>
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
            </header> */}
            <Component {...pageProps} />
        </>
    )
}
  
export default MyApp