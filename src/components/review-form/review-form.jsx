import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import StarsRating from '../stars-rating/stars-rating';
import './review-form.scss';

function ReviewForm(props) {
  const { className: reviewFormClassName } = props;

  return <form id="review-form" className={cn('review-form', reviewFormClassName)}>
    <h2 className="review-form__title">Оставить отзыв</h2>
    <div className="review-form__inner">
      <div className="review-form__field">
        <input type="text" name="name" id="name" required/>
        <label className="review-form__label" htmlFor="name">Имя</label>
      </div>
      <div className="review-form__field">
        <input type="text" name="advantages" id="advantages"/>
        <label className="review-form__label" htmlFor="name">Достоинства</label>
      </div>
      <div className="review-form__field">
        <input type="text" name="disadvantages" id="disadvantages"/>
        <label className="review-form__label" htmlFor="name">Недостатки</label>
      </div>
    </div>
    <div className="review-form__inner">
      <div className="review-form__field review-form__field--rating">
          Оцените товар:
          <StarsRating className="review-form__rating"/>
      </div>
      <div className="review-form__field">
        <textarea name="comment" id="comment" required></textarea>
        <label className="review-form__label" htmlFor="comment">Комментарий</label>
      </div>
    </div>
    <button className="review-form__submit button button--primary button--uppercase" type="submit">Оставить отзыв</button>
  </form>;
}

ReviewForm.propTypes = {
  className: PropTypes.string
};

export default ReviewForm;