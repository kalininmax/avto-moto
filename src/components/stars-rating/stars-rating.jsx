import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './stars-rating.scss';
import { ReactComponent as StarIcon } from './star-icon.svg';

const RATING = [5, 4, 3, 2, 1]

function StarsRating(props) {
  const { value: ratingValue, onChange: onInputChange, className: starsRatingClassName } = props;

  return <div className={cn('stars-rating', starsRatingClassName)}>
      { RATING.map(number => {
        return (<React.Fragment key={number}>
            <input
              onChange={onInputChange}
              className="stars-rating__input visually-hidden"
              name="rating"
              id={`${number}-stars`}
              type="radio"
              required
              checked={ratingValue === number}
              value={`${number}`}
            />
            <label htmlFor={`${number}-stars`}>
              <StarIcon className="stars-rating__icon" width="27" height="27"/>
            </label>
          </React.Fragment>
        )
      }) }
    </div>
}

StarsRating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string
};

export default StarsRating;
