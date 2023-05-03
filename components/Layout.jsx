import React from 'react'
import Head from 'next/head'
import { Footer, Navbar } from './Index'

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>Phoenix Audio</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className='main-container'>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout
