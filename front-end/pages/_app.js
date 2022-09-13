import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import  { AppProps } from 'next/app'
import  '../styles/style.css'
import { TransactionProvider } from "../context/TransactionContext";

function MyApp({ Component, pageProps }) {
  return (
    <TransactionProvider>
       <Component {...pageProps} />
    </TransactionProvider>
  )
}

export default MyApp
