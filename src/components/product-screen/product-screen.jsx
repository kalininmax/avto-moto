import React from 'react';
import { Helmet } from 'react-helmet'
import Header from '../header/header';
import Footer from '../footer/footer';
import OpenSansRegular from '../../fonts/opensans-regular.woff2';
import OpenSansSemiBold from '../../fonts/opensans-semibold.woff2';
import OpenSansBold from '../../fonts/opensans-bold.woff2';

function ProductScreen() {
  return (
    <>
      <Helmet>
        <link rel="preload" href={OpenSansRegular} type="font/woff2" as="font" crossOrigin="anonymous" />
        <link rel="preload" href={OpenSansSemiBold} type="font/woff2" as="font" crossOrigin="anonymous" />
        <link rel="preload" href={OpenSansBold} type="font/woff2" as="font" crossOrigin="anonymous" />
      </Helmet>
      <Header />
      <main></main>
      <Footer />
    </>
  )
}

export default ProductScreen;