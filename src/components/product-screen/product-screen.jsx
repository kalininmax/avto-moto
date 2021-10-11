import React, { useState } from 'react';
import { Helmet } from 'react-helmet'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import Header from '../header/header';
import Footer from '../footer/footer';
import Gallery from '../gallery/gallery';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import ModalWindow from '../modal-window/modal-window';
import Map from '../map/map';

import OpenSansRegular from '../../fonts/opensans-regular.woff2';
import OpenSansSemiBold from '../../fonts/opensans-semibold.woff2';
import OpenSansBold from '../../fonts/opensans-bold.woff2';
import "@reach/tabs/styles.css";
import './product-screen.scss';

import { PRODUCT, REVIEWS } from '../../data';

function ProductScreen() {

  const localStoregeReviews = localStorage.getItem('reviews') ? JSON.parse(localStorage.getItem('reviews')) : [];
  const allReviews = localStoregeReviews !== [] ? [...REVIEWS, ...localStoregeReviews] : REVIEWS;
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState(allReviews);

  const onReviewFormSumbit = review => {
    setReviews([...reviews, review]);
    localStoregeReviews.push(review);
    setShowReviewForm(false);
    
    localStorage.setItem('reviews', JSON.stringify(localStoregeReviews));
  }

  const onReviewFormLinkClick = evt => {
    evt.preventDefault();

    setShowReviewForm(true);
  }

  return (
    <>
      <Helmet>
        <link rel="preload" href={OpenSansRegular} type="font/woff2" as="font" crossOrigin="anonymous"/>
        <link rel="preload" href={OpenSansSemiBold} type="font/woff2" as="font" crossOrigin="anonymous"/>
        <link rel="preload" href={OpenSansBold} type="font/woff2" as="font" crossOrigin="anonymous"/>
      </Helmet>
      <Header className="app__header"/>
      <main>
        <section className="product container">
          <div className="product__gallery-wrapper">
            <Gallery className="product__gallery" images={PRODUCT.photos}/>
            <p className="product__gallery-label">{PRODUCT.label}</p>
          </div>
          <div className="product__summary">
            <h1 className="product__name">{PRODUCT.title}</h1>
            <ul className="product__features">
              <li className="product__feature product__feature--fuel">бензин</li>
              <li className="product__feature product__feature--transmission">механика</li>
              <li className="product__feature product__feature--horsepower">100 л.с.</li>
              <li className="product__feature product__feature--engine">1.4 л</li>
            </ul>
            <p className="product__price-wrapper">
              <b className="product__price-new">{PRODUCT.price.new.toLocaleString('ru-RU')} ₽</b>
              <span className="product__price-old">{PRODUCT.price.old.toLocaleString('ru-RU')} ₽</span>
            </p>
            <a className="product__order-button button button--primary button--uppercase" href="##">Оставить заявку</a>
            <a className="product__credit-button button button--uppercase" href="##">В кредит от 11 000 ₽</a>
          </div>
          <Tabs className="product__details tabs">
            <TabList className="tabs__list">
              <Tab className="tabs__button">Характеристики</Tab>
              <Tab className="tabs__button">Отзывы</Tab>
              <Tab className="tabs__button">Контакты</Tab>
            </TabList>
            <TabPanels className="tabs__panels">
              <TabPanel className="product__specifications">
                <table>
                  <tbody>
                    { PRODUCT.specifications.map(spec => <tr key={spec.name}>
                      <td>{ spec.name }</td>
                      <td>{ spec.value }</td>
                    </tr>) }
                  </tbody>
                </table>
              </TabPanel>
              <TabPanel className="product__reviews">
                <ul>
                  { reviews.map(review => <Review key={review.id} className="product__review" review={review}/>) }
                </ul>
                <a href="#review-form" className="product__revew-button button button--uppercase" onClick={onReviewFormLinkClick}>Оставить отзыв</a>
              </TabPanel>
              <TabPanel className="product__contacts">
                <div className="product__contacts-inner">
                  <p>
                    <b>Адрес</b>
                    Санкт-Петербург,<br/>
                    набережная реки Карповки, дом 5
                  </p>
                  <p>
                    <b>Режим работы</b>
                    Ежедневно, с 10:00 до 21:00
                  </p>
                  <p>
                    <b>Телефон</b>
                    <a href="tel:88003335599">8 (800) 333-55-99</a>
                  </p>
                  <p>
                    <b>E-mail</b>
                    <a href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
                  </p>
                </div>
                <div className="product__contacts-map">
                  <Map/>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </section>
        <ModalWindow active={showReviewForm} setActive={setShowReviewForm}>
          <ReviewForm active={showReviewForm} reviews={reviews} onSubmit={onReviewFormSumbit}/>
        </ModalWindow>
      </main>
      <Footer/>
    </>
  )
}

export default ProductScreen;