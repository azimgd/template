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
import PagesContainer from 'containers/PagesContainer';
import PageViewContainer from 'containers/PageViewContainer';
import PageFormContainer from 'containers/PageFormContainer';
import ConfigContainer from 'containers/ConfigContainer';
import ConfigNavigationContainer from 'containers/ConfigNavigationContainer';
import ConfigPageCategoriesContainer from 'containers/ConfigPageCategoriesContainer';
import ConfigProductCategoriesContainer from 'containers/ConfigProductCategoriesContainer';

const RoutesContainer = ({ history }) =>
  <Router history={history}>
    <Route path={routes.LOGIN} component={LoginContainer} />
    <Route path={routes.ROOT} component={LayoutContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path={routes.PRODUCTS}>
        <IndexRoute component={ProductsContainer} />
        <Route path={routes.PRODUCTS_CREATE} component={ProductFormContainer} />
        <Route path={routes.PRODUCTS_SHOW} component={ProductViewContainer} />
      </Route>
      <Route path={routes.PAGES}>
        <IndexRoute component={PagesContainer} />
        <Route path={routes.PAGES_CREATE} component={PageFormContainer} />
        <Route path={routes.PAGES_SHOW} component={PageViewContainer} />
      </Route>
      <Route path={routes.CONFIG}>
        <IndexRoute component={ConfigContainer} />
        <Route path={routes.CONFIG_NAVIGATION} component={ConfigNavigationContainer} />
        <Route path={routes.CONFIG_PRODUCT_CATEGORIES} component={ConfigProductCategoriesContainer} />
        <Route path={routes.CONFIG_PAGE_CATEGORIES} component={ConfigPageCategoriesContainer} />
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
