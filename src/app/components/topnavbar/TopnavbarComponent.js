import React from 'react';

const TopnavbarComponent = () =>
  <div className="TopnavbarComponent">
    <ul className="TopnavbarComponent-nav">
      <li className="TopnavbarComponent-nav-item"><a href="">Home page</a></li>
      <li className="TopnavbarComponent-nav-item"><a href="">Products page</a></li>
      <li className="TopnavbarComponent-nav-item"><a href="">Discounts page</a></li>
      <li className="TopnavbarComponent-nav-item"><a href="">Daily offer</a></li>
    </ul>
  </div>;

TopnavbarComponent.propTypes = {
};

export default TopnavbarComponent;
