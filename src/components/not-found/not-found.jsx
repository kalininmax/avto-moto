import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import NotFoundImage from './404.svg';
import './not-found.scss';

function NotFound() {
  return (
    <>
      <Header/>
      <main className="not-found">
        <img src={NotFoundImage} alt="404 Not Found"/>
      </main>
      <Footer/>
    </>
  );
}

export default NotFound;