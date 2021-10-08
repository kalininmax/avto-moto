import React from 'react';
import NavList from '../nav-list/nav-list';
import './footer.scss';

const PAGES = [
  { title: 'Корпоративным клиентам', route: 'corporative-clients' },
  { title: 'Клиентам', route: 'clients' },
  { title: 'Аренда авто', route: 'rent-car' },
  { title: 'Каршеринг', route: 'carsharing' },
  { title: 'Как продать авто', route: 'how-to-sell-car' },
  { title: 'Trade-in', route: 'trade-in' },
  { title: 'Test drive', route: 'test-drive' }
];

function Footer() {
  return <footer className="footer">
    <div className="container footer__container">
      <NavList className="footer__nav" list={PAGES} />
    </div>
  </footer>;
}

export default Footer;