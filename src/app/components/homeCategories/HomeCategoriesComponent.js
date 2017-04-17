import React, { PropTypes } from 'react';
import map from 'lodash/map';
import get from 'lodash/get';
import { Link } from 'react-router';

const HomeCategoriesComponent = ({ categoryUrl, subCategoryUrl, categories }) =>
  <div className="HomeCategoriesComponentBlock">
    <div className="HomeCategoriesComponent">
      {map(categories, (category, ckey) =>
        <div className="HomeCategoriesComponent-item" key={ckey}>
          <div className="HomeCategoriesComponent-item-title">
            <Link to={`${categoryUrl}?categoryId=${category.id}`}>{category.name}</Link>
          </div>
          <div className="HomeCategoriesComponent-item-list">
            <ul>
              {map(category.subcategories, (subCategory, skey) =>
                <li key={skey}><Link to={`${subCategoryUrl}?subCategoryId=${subCategory.id}`}>{subCategory.name}</Link></li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  </div>;

HomeCategoriesComponent.propTypes = {
  categoryUrl: PropTypes.string.isRequired,
  subCategoryUrl: PropTypes.string.isRequired,
  categories: PropTypes.object.isRequired,
};

export default HomeCategoriesComponent;
