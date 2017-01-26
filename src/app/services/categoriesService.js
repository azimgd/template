import _ from 'lodash';

export const transformCategories = categories => _.reduce(categories, (acc, category) => {
  _.set(acc, category.id, category.name);
  return acc;
}, {});

export const mapCategoriesToSubCategories = (categories, subcategories) => _.reduce(categories, (acc, category) => {
  const modifiedSubcategories = _.filter(subcategories, { categoryId: category.id });
  const modifiedCategory = Object.assign({}, category, { subcategories: modifiedSubcategories });
  acc.push(modifiedCategory);
  return acc;
}, []);

export const filterSubCategories = (subCategories, { categoryId }) => _.filter(subCategories, subCategory =>
  parseInt(subCategory.categoryId, 10) === parseInt(categoryId, 10),
);
