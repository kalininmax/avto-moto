import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from './site-logo.svg';

function SiteLogo(props) {
  const { className: siteLogoClassName } = props;

  return <Logo className={cn('site-logo', siteLogoClassName)} width="134" height="55" />;
}

SiteLogo.propTypes = {
  className: PropTypes.string,
};

export default SiteLogo;