
import Document, {
    Html,
    Head,
    Main,
    NextScript,
  } from "next/document";


import React from "react";

export default class CustomDocument extends Document {
    render() {
        return <Html>
            <Head>

            </Head>
            <body>
            <Main/>
            </body>
            <NextScript />
        </Html>
    }
}