import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavList from '../nav-list/nav-list';
import SiteLogo from '../site-logo/site-logo';
import './site-nav.scss';

const PAGES = [
  { title: 'Автомобили', route: 'auto' },
  { title: 'Контакты', route: 'contacts' },
  { title: 'Услуги', route: 'services' },
  { title: 'Вакансии', route: 'vacancies' }
];

function SiteNav(props) {
  const { className: siteNavClassName } = props;

  return <nav className={cn('site-nav', 'container', siteNavClassName)}>
      <NavLink className="site-nav__logo-link" to="/" aria-label="На главную">
        <SiteLogo className="site-nav__logo" />
      </NavLink>
      <NavList className="site-nav__list" list={PAGES} />
    </nav>
}

SiteNav.propTypes = {
  className: PropTypes.string,
};

export default SiteNav;