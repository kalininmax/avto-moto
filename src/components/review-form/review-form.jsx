import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import StarsRating from '../stars-rating/stars-rating';
import './review-form.scss';

const MIN_LENGTH = 1;

function ReviewForm(props) {
  const nameInput = useRef(null);
  const { active, reviews, onSubmit: onReviewFormSubmit, className: reviewFormClassName } = props;
  
  const [author, setAuthor] = useState('');
  const [advantages, setAdvantages] = useState('');
  const [disadvantages, setDisadvantages] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isCommentValid, setIsCommentValid] = useState(true);

  const isName = author.trim().length >= MIN_LENGTH;
  const isComment = comment.trim().length >= MIN_LENGTH;

  useEffect(() => {
    if (active) {
      nameInput.current.focus();
    }
  }, [active]);

  const clearForm = () => {
    setAuthor('');
    setAdvantages('');
    setDisadvantages('');
    setRating(0);
    setComment('');
  }

  const onInputChange = evt => {
     switch (evt.target.name) {
      case 'name':
        setAuthor(evt.target.value);
        localStorage.setItem('author', evt.target.value);
        break;
      case 'advantages':
        setAdvantages(evt.target.value);
        localStorage.setItem('advantages', evt.target.value);
        break;
      case 'disadvantages':
        setDisadvantages(evt.target.value);
        localStorage.setItem('disadvantages', evt.target.value);
        break;
      case 'rating':
        setRating(Number(evt.target.value));
        localStorage.setItem('rating', Number(evt.target.value));
        break;
      case 'comment':
        setComment(evt.target.value);
        localStorage.setItem('comment', evt.target.value);
        break;
    
      default:
        break;
    }
  }

  const onFormSubmit = evt => {
    evt.preventDefault();

    setIsNameValid(isName);
    setIsCommentValid(isComment);

    if (!isName || !isComment) {
      return;
    }

    const review = {
      id: reviews.length + 1,
      author: author,
      advantages: advantages,
      disadvantages: disadvantages,
      rating: rating,
      comment: comment,
      time: new Date()
    }

    onReviewFormSubmit(review);
    clearForm();
  }

  return <form id="review-form" className={cn('review-form', reviewFormClassName)}>
    <h2 className="review-form__title">Оставить отзыв</h2>
    <div className="review-form__inner">
      <div className="review-form__field">
        { !isNameValid && <span className="review-form__warning-text">Пожалуйста, заполните поле</span> }
        <input className={!isNameValid ? 'review-form__warning-input' : ''} ref={nameInput} onInput={onInputChange} value={author} type="text" name="name" id="name" required/>
        <label className={cn('review-form__label', `${isName ? 'review-form__label--hidden' : ''}`)} htmlFor="name">Имя</label>
      </div>
      <div className="review-form__field">
        <input onInput={onInputChange} value={advantages} type="text" name="advantages" id="advantages"/>
        <label className={cn('review-form__label', `${advantages.trim() ? 'review-form__label--hidden' : ''}`)} htmlFor="advantages">Достоинства</label>
      </div>
      <div className="review-form__field">
        <input onInput={onInputChange} value={disadvantages} type="text" name="disadvantages" id="disadvantages"/>
        <label className={cn('review-form__label', `${disadvantages.trim() ? 'review-form__label--hidden' : ''}`)} htmlFor="disadvantages">Недостатки</label>
      </div>
    </div>
    <div className="review-form__inner">
      <div className="review-form__field review-form__field--rating">
          Оцените товар:
          <StarsRating onChange={onInputChange} value={rating} className="review-form__rating"/>
      </div>
      <div className="review-form__field">
        { !isCommentValid && <span className="review-form__warning-text">Пожалуйста, заполните поле</span> }
        <textarea className={!isCommentValid ? 'review-form__warning-input' : ''} onInput={onInputChange} value={comment} name="comment" id="comment" required></textarea>
        <label className={cn('review-form__label', `${isComment ? 'review-form__label--hidden' : ''}`)} htmlFor="comment">Комментарий</label>
      </div>
    </div>
    <button onClick={onFormSubmit} className="review-form__submit button button--primary button--uppercase" type="submit">Оставить отзыв</button>
  </form>;
}

ReviewForm.propTypes = {
  active: PropTypes.bool,
  reviews: PropTypes.array,
  onSubmit: PropTypes.func,
  className: PropTypes.string
};

export default ReviewForm;