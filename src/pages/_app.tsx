import "@/styles/globals.css"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import type { AppProps } from "next/app"
import Layout from "@/components/Layout"
import { CartProvider } from "@/context/CartContext"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}
