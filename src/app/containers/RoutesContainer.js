import React, { PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute } from 'react-router';

import LayoutContainer from 'containers/LayoutContainer';
import LoginContainer from 'containers/LoginContainer';
import HomeContainer from 'containers/HomeContainer';
import ProductsContainer from 'containers/ProductsContainer';
import ProductViewContainer from 'containers/ProductViewContainer';
import ProductFormContainer from 'containers/ProductFormContainer';
import CheckoutContainer from 'containers/CheckoutContainer';
import NotFoundContainer from 'containers/NotFoundContainer';

const RoutesContainer = ({ history }) =>
  <Router history={history}>
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

RoutesContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default RoutesContainer;
