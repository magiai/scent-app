import Link from 'next/link';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
    return <>
        <header>
            <nav>
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
        <Component {...pageProps} />
    </>;
}
  
export default MyApp