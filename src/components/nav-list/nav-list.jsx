import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './nav-list.scss';

function NavList(props) {
  const { list, className: navListClassName } = props;

  return <ul className={cn('nav-list', navListClassName)}>
    { list.map(page => <li className="nav-list__item" key={page.title}>
        <NavLink className="nav-list__link" to={page.route}>{page.title}</NavLink>
      </li>) }
    </ul>;
}

NavList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string, route: PropTypes.string})),
  className: PropTypes.string,
};

export default NavList;