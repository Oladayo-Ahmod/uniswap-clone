import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import type { AppProps } from 'next/app'
import  '../styles/style.css'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
