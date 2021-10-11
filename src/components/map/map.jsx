import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import PinIcon from './pin-icon.svg';
import './map.scss';

const LOCATIONS = [59.968137, 30.316272];
const ZOOM = 15;
const MARKER_SIZES = [32, 40];

function Map(props) {
  /* eslint-disable */
  const { className: mapClassName } = props;

  useEffect(() => {
    ymaps.ready(() => {
      const map = new ymaps.Map('map', {
        center: LOCATIONS,
        zoom: ZOOM,
        controls: []
      });
  
      const marker = new ymaps.Placemark(
        map.getCenter(),
        { hintContent: 'Набережная реки Карповки, дом 5' },
        {
          iconLayout: 'default#image',
          iconImageHref: PinIcon,
          iconImageSize: MARKER_SIZES,
        },
      );
  
      map.geoObjects.add(marker);
    })
  }, []);

  return <div id="map" className={cn('map', mapClassName)}></div>;
}

Map.propTypes = {
  className: PropTypes.string
};

export default Map;