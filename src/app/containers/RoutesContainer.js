import React, { PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute } from 'react-router';

import * as routes from 'constants/routes';
import LayoutContainer from 'containers/LayoutContainer';
import LoginContainer from 'containers/LoginContainer';
import HomeContainer from 'containers/HomeContainer';
import ProductsContainer from 'containers/ProductsContainer';
import ProductViewContainer from 'containers/ProductViewContainer';
import ProductFormContainer from 'containers/ProductFormContainer';
import CheckoutContainer from 'containers/CheckoutContainer';
import NotFoundContainer from 'containers/NotFoundContainer';
import PageFormContainer from 'containers/PageFormContainer';

const RoutesContainer = ({ history }) =>
  <Router history={history}>
    <Route path={routes.LOGIN} component={LoginContainer} />
    <Route path={routes.ROOT} component={LayoutContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path={routes.PRODUCTS_CREATE} component={ProductFormContainer} />
      <Route path={routes.PAGES_CREATE} component={PageFormContainer} />
      <Route path={routes.PRODUCTS}>
        <IndexRoute component={ProductsContainer} />
        <Route path={routes.PRODUCTS_SHOW} component={ProductViewContainer} />
      </Route>
      <Route path={routes.CHECKOUT} component={CheckoutContainer} />
      <Route path={routes.NOTFOUND} component={NotFoundContainer} />
      <Redirect from="*" to={routes.NOTFOUND} />
    </Route>
  </Router>;

RoutesContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default RoutesContainer;
