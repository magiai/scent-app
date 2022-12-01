import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
        <Head>
            <meta charset="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name=" theme-color" content="#fff" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="noindex, nofollow" />

            <title key="title">Scent app components</title>
            <link rel="icon" href="/favicon.ico"></link>
            <meta name="description" content="Application description"></meta>

            <noscript>Scent app components</noscript>
        </Head>
        <body>
            <svg 
                className="svg__background"
                width='100%'
                height='100%' 
                viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
                <filter id='noiseFilter' x="-75%" y="-100%" width="250%" height="300%">
                    <feTurbulence 
                                type='fractalNoise' 
                                baseFrequency='5' 
                                numOctaves='10'
                                seed="10"
                                stitchTiles='stitch'/>
                </filter>

                <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
            </svg>
            <Main />
            <NextScript />
        </body>
    </Html>
    )
}