import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import LayoutContainer from 'containers/LayoutContainer';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={LayoutContainer} />
      </Router>
    );
  }
}

ReactDOM.render(<Routes />, document.getElementById('root'));
