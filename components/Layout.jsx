
import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div id='layout' className="layout">
            <Navbar></Navbar>
      <Head>
        <title>Bekware</title>
      </Head>
      <header>
      </header>
      <main id='main-container' className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout