import React, { PropTypes } from 'react';
import { Router, Route, Redirect, IndexRoute, IndexRedirect } from 'react-router';

import LayoutContainer from 'containers/LayoutContainer/index';
import LoginContainer from 'containers/LoginContainer/index';
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
    <Route path="/login" component={LoginContainer} />
    <Route path="/" component={LayoutContainer}>
      <IndexRedirect to="/products" />
      <Route path="/products">
        <IndexRoute component={ProductsContainer} />
        <Route component={UniqueIdentifierContainer}>
          <Route path="new" component={ProductCreateContainer} />
        </Route>
        <Route path="options/:id" component={ProductOptionsContainer} />
        <Route path=":id" component={ProductViewContainer} />
      </Route>
      <Route path="/pages">
        <IndexRoute component={PagesContainer} />
        <Route path="new" component={PageCreateContainer} />
        <Route path=":id" component={PageViewContainer} />
      </Route>
      <Route path="/config">
        <IndexRoute component={ConfigContainer} />
        <Route path="navigation" component={ConfigNavigationContainer} />
        <Route path="categories/products" component={ConfigProductCategoriesContainer} />
        <Route path="categories/pages" component={ConfigPageCategoriesContainer} />
      </Route>
      <Route path="/checkout" component={CheckoutContainer} />
      <Route path="/404" component={NotFoundContainer} />
      <Redirect from="*" to="/404" />
    </Route>
  </Router>;

Routes.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Routes;
