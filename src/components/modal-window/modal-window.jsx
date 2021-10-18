import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './modal-window.scss';

function ModalWindow(props) {
  const { active = false, setActive, className: modalWindowClassName } = props;
  const modalContentRef = useRef(null);

  const onCloseButtonClick = evt => {
    evt.preventDefault();
    setActive(false);
  }

  useEffect(() => {
    const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    const modalContent = modalContentRef.current;
    let focusableElements = modalContent.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    const firstTabStop = focusableElements[0];
    const lastTabStop = focusableElements[focusableElements.length - 1];    
    
    const onModalKeydown = evt => {
      if (evt.key === 'Tab') {
        if (evt.shiftKey && document.activeElement === firstTabStop) {
          evt.preventDefault();
          lastTabStop.focus();
        }

        if (document.activeElement === lastTabStop && !evt.shiftKey) {
          evt.preventDefault();
          firstTabStop.focus();
        }
      }
    }

    modalContent.addEventListener('keydown', onModalKeydown);

    const onEscKeydown = evt => {
      
      if (evt.key === 'Escape') {
        evt.preventDefault();
        setActive(false);
      }
    }

    window.addEventListener('keydown', onEscKeydown);

    return () => {
      window.removeEventListener('keydown', onEscKeydown);
      modalContent ?? modalContent.current.removeEventListener('keydown', onModalKeydown);
    }
  }, [active, setActive]);

  return <div className={cn(`modal-window ${active ? '' : 'modal-window--hidden'}`, modalWindowClassName)}>
    <div className="modal-window__overlay" onClick={onCloseButtonClick}></div>
    <div ref={modalContentRef} className="modal-window__content">
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