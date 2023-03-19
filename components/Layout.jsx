
import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Bekware</title>
      </Head>
      <header>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout