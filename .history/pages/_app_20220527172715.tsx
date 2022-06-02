
import '../styles/variables.css';
import '../styles/global.css';
import { AppProps } from 'next/app';
// import registerServiceWorker from './registerServiceWorker';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps} />
    )
}

// registerServiceWorker();
  
export default MyApp