import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import LayoutContainer from 'containers/LayoutContainer';
import LoginContainer from 'containers/LoginContainer';
import ProductsContainer from 'containers/ProductsContainer';
import ProductViewContainer from 'containers/ProductViewContainer';
import CheckoutContainer from 'containers/CheckoutContainer';

const Routes = () =>
  <Router history={browserHistory}>
    <Route path="/login" component={LoginContainer} />
    <Route path="/" component={LayoutContainer}>
      <IndexRoute component={ProductsContainer} />
      <Route path="/products/">
        <IndexRoute component={ProductsContainer} />
        <Route path=":id" component={ProductViewContainer} />
      </Route>
      <Route path="/checkout" component={CheckoutContainer} />
    </Route>
  </Router>;

ReactDOM.render(<Routes />, document.getElementById('root'));
