
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../app/store';
import '../styles/variables.css';
import '../styles/global.css';

function MyApp({ Component, pageProps 
}: AppProps) {
    return (
        <Component {...pageProps} />
    )
}

export default MyApp