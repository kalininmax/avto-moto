import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './modal-window.scss';

function ModalWindow(props) {
  const { active = false, setActive, className: modalWindowClassName } = props;

  const onCloseButtonClick = evt => {
    evt.preventDefault();
    setActive(false);
  }

  useEffect(() => {
    const onEscKeydown = evt => {
      evt.preventDefault();
  
      if (evt.key === 'Escape') {
        setActive(false);
      }
    }

    window.addEventListener('keydown', onEscKeydown);

    return () => window.removeEventListener('keydown', onEscKeydown)
  }, [active, setActive]);

  return <div className={cn(`modal-window ${active ? '' : 'modal-window--hidden'}`, modalWindowClassName)}>
    <div className="modal-window__overlay" onClick={onCloseButtonClick}></div>
    <div className="modal-window__content">
      { props.children }
      <button onClick={onCloseButtonClick} className="modal-window__button-close" aria-label="Закрыть"></button>
    </div>
  </div>;
}

ModalWindow.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default ModalWindow;