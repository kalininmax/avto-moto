import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import SiteNav from '../site-nav/site-nav';
import './header.scss';

function Header(props) {
  const { className: headerClassName } = props;

  return <header className={cn('header', headerClassName)}>
    <SiteNav className="header__nav" />
  </header>;
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;