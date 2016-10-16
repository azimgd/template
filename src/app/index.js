import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import LayoutContainer from 'containers/LayoutContainer';
import LoginContainer from 'containers/LoginContainer';
import HomeContainer from 'containers/HomeContainer';
import ProductViewContainer from 'containers/ProductViewContainer';
import CheckoutContainer from 'containers/CheckoutContainer';

const Routes = () =>
  <Router history={browserHistory}>
    <Route path="/login" component={LoginContainer} />
    <Route component={LayoutContainer}>
      <Route path="/" component={HomeContainer} />
      <Route path="/products/">
        <Route path=":id" component={ProductViewContainer} />
      </Route>
      <Route path="/checkout" component={CheckoutContainer} />
    </Route>
  </Router>;

ReactDOM.render(<Routes />, document.getElementById('root'));
