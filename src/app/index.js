import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Redirect, IndexRoute, browserHistory } from 'react-router';
import { Horizon as horizon, HorizonProvider } from 'react-hz';

import LayoutContainer from 'containers/LayoutContainer';
import LoginContainer from 'containers/LoginContainer';
import HomeContainer from 'containers/HomeContainer';
import ProductsContainer from 'containers/ProductsContainer';
import ProductViewContainer from 'containers/ProductViewContainer';
import ProductFormContainer from 'containers/ProductFormContainer';
import CheckoutContainer from 'containers/CheckoutContainer';
import NotFoundContainer from 'containers/NotFoundContainer';

const Routes = () =>
  <Router history={browserHistory}>
    <Route path="/login" component={LoginContainer} />
    <Route path="/" component={LayoutContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path="/form" component={ProductFormContainer} />
      <Route path="/products">
        <IndexRoute component={ProductsContainer} />
        <Route path=":id" component={ProductViewContainer} />
      </Route>
      <Route path="/checkout" component={CheckoutContainer} />
      <Route path="/404" component={NotFoundContainer} />
      <Redirect from="*" to="/404" />
    </Route>
  </Router>;

const horizonInstance = horizon({ host: 'localhost:8181' });

ReactDOM.render((
  <HorizonProvider instance={horizonInstance}>
    <Routes />
  </HorizonProvider>
), document.getElementById('root'));
