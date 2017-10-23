import React, { PropTypes } from 'react';
import css from 'services/cssService';
import styles from 'components/HomeCategories/_HomeCategoriesComponent.scss';

import map from 'lodash/map';
import { Link } from 'react-router-dom';

const HomeCategoriesComponent = ({ categoryUrl, subCategoryUrl, categories }) =>
  <div styleName="HomeCategoriesComponentBlock">
    <div styleName="HomeCategoriesComponent">
      {map(categories, (category, ckey) =>
        <div styleName="HomeCategoriesComponent-item" key={ckey}>
          <div styleName="HomeCategoriesComponent-item-title">
            <Link to={`${categoryUrl}?categoryId=${category.id}`}>{category.name}</Link>
          </div>
          <div styleName="HomeCategoriesComponent-item-list">
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

export default css(HomeCategoriesComponent, styles);
