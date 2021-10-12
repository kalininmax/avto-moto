import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ImageGallery from 'react-image-gallery';
import './gallery.scss';

function Gallery(props) {
  const { images, className: galleryClassName } = props;

  return <ImageGallery 
  items={images}
  showFullscreenButton={false}
  showPlayButton={false}
  infinite={false}
  disableKeyDown={true}
  slideDuration={300}
  additionalClass={cn('gallery', galleryClassName)}
    renderLeftNav={(onClick, disabled) => (
      <button
        type="button"
        className="gallery__button gallery__button--prev"
        disabled={disabled}
        onClick={onClick}
        aria-label="Previous Slide"
      >
      </button>
    )}
    renderRightNav={(onClick, disabled) => (
      <button
        type="button"
        className="gallery__button gallery__button--next"
        disabled={disabled}
        onClick={onClick}
        aria-label="Next Slide"
      >
      </button>
    )}
  />;
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    original: PropTypes.string, 
    srcSet: PropTypes.string, 
    originalWidth: PropTypes.number,
    originalHeight: PropTypes.number,
    thumbnail: PropTypes.string,
    thumbnailWidth: PropTypes.number,
    thumbnailHeight: PropTypes.number,
    sizes: PropTypes.string,
    originalTitle: PropTypes.string
  })),
  className: PropTypes.string
};

export default Gallery;