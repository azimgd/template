import React from 'react';
import { Link } from 'react-router';

const TopnavbarComponent = () =>
  <div className="TopnavbarComponentBlock">
    <div className="TopnavbarComponent">
      <ul className="TopnavbarComponent-nav">
        <li className="TopnavbarComponent-nav-item"><Link to="/">Home page</Link></li>
        <li className="TopnavbarComponent-nav-item"><Link to="/products">All products</Link></li>
        <li className="TopnavbarComponent-nav-item"><Link to="/products/new">Create new product</Link></li>
        <li className="TopnavbarComponent-nav-item"><Link to="/pages">All pages</Link></li>
        <li className="TopnavbarComponent-nav-item"><Link to="/pages/new">Create new page</Link></li>
        <li className="TopnavbarComponent-nav-item"><Link to="/config/categories/products">Product categories</Link></li>
        <li className="TopnavbarComponent-nav-item"><Link to="/config/categories/pages">Page categories</Link></li>
      </ul>
    </div>
  </div>;

TopnavbarComponent.propTypes = {
};

export default TopnavbarComponent;
