import React, { PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute, IndexRedirect } from 'react-router';

import * as routes from 'constants/routes';
import LayoutContainer from 'containers/LayoutContainer/index';
import LoginContainer from 'containers/LoginContainer/index';
import HomeContainer from 'containers/HomeContainer/index';
import ProductsContainer from 'containers/ProductsContainer/index';
import ProductViewContainer from 'containers/ProductViewContainer/index';
import ProductCreateContainer from 'containers/ProductCreateContainer/index';
import ProductOptionsContainer from 'containers/ProductOptionsContainer/index';
import CheckoutContainer from 'containers/CheckoutContainer/index';
import NotFoundContainer from 'containers/NotFoundContainer/index';
import PagesContainer from 'containers/PagesContainer/index';
import PageViewContainer from 'containers/PageViewContainer/index';
import PageCreateContainer from 'containers/PageCreateContainer/index';
import ConfigContainer from 'containers/ConfigContainer/index';
import ConfigNavigationContainer from 'containers/ConfigNavigationContainer/index';
import ConfigPageCategoriesContainer from 'containers/ConfigPageCategoriesContainer/index';
import ConfigProductCategoriesContainer from 'containers/ConfigProductCategoriesContainer/index';
import UniqueIdentifierContainer from 'containers/UniqueIdentifierContainer/index';

const Routes = ({ history }) =>
  <Router history={history}>
    <Route path={routes.LOGIN} component={LoginContainer} />
    <Route path={routes.ROOT} component={LayoutContainer}>
      <IndexRedirect to={routes.PRODUCTS} />
      <Route path={routes.PRODUCTS}>
        <IndexRoute component={ProductsContainer} />
        <Route component={UniqueIdentifierContainer}>
          <Route path={routes.PRODUCTS_CREATE} component={ProductCreateContainer} />
        </Route>
        <Route path={routes.PRODUCTS_OPTIONS_CREATE} component={ProductOptionsContainer} />
        <Route path={routes.PRODUCTS_SHOW} component={ProductViewContainer} />
      </Route>
      <Route path={routes.PAGES}>
        <IndexRoute component={PagesContainer} />
        <Route path={routes.PAGES_CREATE} component={PageCreateContainer} />
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

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
