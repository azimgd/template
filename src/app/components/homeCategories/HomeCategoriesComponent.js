import React from 'react';
import _ from 'lodash';

const HomeCategoriesComponent = () =>
  <div className="HomeCategoriesComponentBlock">
    <div className="HomeCategoriesComponent">
      {_.map([1, 2, 3, 4, 5, 6, 7], (item, key) =>
        <div className="HomeCategoriesComponent-item" key={key}>
          <div className="HomeCategoriesComponent-item-title">
            <a href="">Cars</a>
          </div>
          <div className="HomeCategoriesComponent-item-list">
            <ul>
              <li><a href="">Cars</a></li>
              <li><a href="">Trucks</a></li>
              <li><a href="">Motorcycles and other equipment</a></li>
              <li><a href="">Unicycles</a></li>
              <li><a href="">Bicycles</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  </div>;

HomeCategoriesComponent.propTypes = {
};

export default HomeCategoriesComponent;
