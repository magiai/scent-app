import { Html, Head, Main, NextScript } from "next/document";
import React from 'react';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
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
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}