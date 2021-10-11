import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './stars-rating.scss';
import { ReactComponent as StarIcon } from './star-icon.svg';

function StarsRating(props) {
  const { className: starsRatingClassName } = props;

  return <div className={cn('stars-rating', starsRatingClassName)}>
      <input className="stars-rating__input visually-hidden" name="rating" id="5-stars" type="radio" required value="5"/>
      <label htmlFor="5-stars">
        <StarIcon className="stars-rating__icon" width="27" height="27"/>
      </label>
      <input className="stars-rating__input visually-hidden" name="rating" id="4-stars" type="radio" required value="4"/>
      <label htmlFor="4-stars">
        <StarIcon className="stars-rating__icon" width="27" height="27"/>
      </label>
      <input className="stars-rating__input visually-hidden" name="rating" id="3-stars" type="radio" required value="3"/>
      <label htmlFor="3-stars">
        <StarIcon className="stars-rating__icon" width="27" height="27"/>
      </label>
      <input className="stars-rating__input visually-hidden" name="rating" id="2-stars" type="radio" required value="2"/>
      <label htmlFor="2-stars">
        <StarIcon className="stars-rating__icon" width="27" height="27"/>
      </label>
      <input className="stars-rating__input visually-hidden" name="rating" id="1-stars" type="radio" required value="1"/>
      <label htmlFor="1-stars">
        <StarIcon className="stars-rating__icon" width="27" height="27"/>
      </label>
    </div>
}

StarsRating.propTypes = {
  className: PropTypes.string
};

export default StarsRating;
