import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import LayoutContainer from 'containers/LayoutContainer';
import HomeContainer from 'containers/HomeContainer';

const Routes = () =>
  <Router history={browserHistory}>
    <Route component={LayoutContainer}>
      <Route path="/" component={HomeContainer} />
    </Route>
  </Router>;

ReactDOM.render(<Routes />, document.getElementById('root'));
