import React, { PropTypes } from 'react';
import _ from 'lodash';

const HomeCategoriesComponent = ({ categories }) =>
  <div className="HomeCategoriesComponentBlock">
    <div className="HomeCategoriesComponent">
      {_.map(categories, (category, ckey) =>
        <div className="HomeCategoriesComponent-item" key={ckey}>
          <div className="HomeCategoriesComponent-item-title">
            <a href="">{category.name}</a>
          </div>
          <div className="HomeCategoriesComponent-item-list">
            <ul>
              {_.map(category.subcategories, (subcategory, skey) =>
                <li key={skey}><a href="">{subcategory.name}</a></li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  </div>;

HomeCategoriesComponent.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default HomeCategoriesComponent;
