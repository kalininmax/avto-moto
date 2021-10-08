import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ProductScreen from '../product-screen/product-screen';
import NotFound from '../not-found/not-found';
import './app.scss';

const AppRoute = {
  HOME: '/',
  PRODUCT: '/marpeh-11'
}

function App() {
  return ( 
    <BrowserRouter>
      <Switch>
        <Redirect exact  from={AppRoute.HOME} to={AppRoute.PRODUCT} />
        <Route exact path={AppRoute.PRODUCT}>
          <ProductScreen />
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
   );
}

export default App;