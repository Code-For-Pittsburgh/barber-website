import '../styles/globals.css'
import '../styles/hero.css'
import '../styles/product.css'
import '../styles/footer.css'
import '../styles/Navbar.css'
import '../styles/productDetails.css'
import '../styles/maylikeshoe.css'
import { Toaster } from 'react-hot-toast';
import { StateContext } from '../context/StateContext'

import React from 'react'
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster position="top-center"
          reverseOrder={false} />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
