import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";

const Home: NextPage = () => {
  const background = 'backround-color:#2D242F'
  return (
    <div className="">
      <Head>
        <title>Crypto Exchange Uniswap clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
      </div>
    

      
    </div>
  )
}

export default Home
