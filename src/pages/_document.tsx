import { Html, Head, Main, NextScript } from "next/document"

import { exoFont } from "@/styles/font"

export default function Document() {
  return (
    <Html lang="en" className={exoFont.className}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
