import _ from 'lodash';

export const transformCategories = (categories) =>
  _.reduce(categories, (acc, category) => {
    _.set(acc, category.id, `${category.name} (${category.subcategories.length})`);
    return acc;
  }, {});

export const transformSubCategories = categories =>
  _.reduce(categories, (acc, category) => {
    _.set(acc, category.id, category.name);
    return acc;
  }, {});

export const filterSubCategories = (subCategories, { categoryId }) =>
  _.filter(subCategories, subCategory =>
    parseInt(subCategory.categoryId, 10) === parseInt(categoryId, 10),
  );
