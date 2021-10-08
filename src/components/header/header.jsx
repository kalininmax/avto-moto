import React from 'react';
import SiteNav from '../site-nav/site-nav';
import './header.scss';

function Header() {
  return <header className="header">
    <SiteNav className="header__nav" />
  </header>;
}

export default Header;