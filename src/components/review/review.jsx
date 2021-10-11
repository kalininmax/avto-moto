import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './review.scss';

function Review(props) {
  const { review, className: reviewClassName } = props;

  return <li className={cn('review', reviewClassName)}>
    <p className="review__author">{ review.author }</p>
    <b className="review__title review__title--plus">Достоинства</b>
    <p className="review__advantages">{ review.advantages }</p>
    <b className="review__title review__title--minus">Недостатки</b>
    <p className="review__disadvantages">{ review.disadvantages }</p>
    <b className="review__title">Комментарий</b>
    <p className="review__comment">{ review.comment }</p>
    <div className="review__rating">
      <span className="visually-hidden">Рейтинг</span>
      <p className="review__rating-stars">
        <span style={{ width: `${review.rating * 20}%` }}></span>
      </p>
      <span className="review__resume">
        { review.rating > 2 ? 'Советует' : 'Не советует' }
      </span>
    </div>
    <div className="review__inner">
      <time className="review__time" dateTime="2021-10-10">
        1 минуту назад
      </time>
      <button className="review__reply-button" type="button">Ответить</button>
    </div>
  </li>
}

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    advantages: PropTypes.string.isRequired,
    disadvantages: PropTypes.string.isRequired,
    comment: PropTypes.string,
    rating: PropTypes.number.isRequired
  }),
  className: PropTypes.string
};

export default Review;