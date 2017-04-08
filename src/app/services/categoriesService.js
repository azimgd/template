import _ from 'lodash';

export const mapCategoriesToSubCategories = (categories, subcategories) =>
  _.reduce(categories, (acc, category) => {
    const modifiedSubcategories = _.filter(subcategories, { categoryId: category.id });
    const modifiedCategory = Object.assign({}, category, { subcategories: modifiedSubcategories });
    acc.push(modifiedCategory);
    return acc;
  }, []);

export const transformCategories = (categories, subcategories) =>
  mapCategoriesToSubCategories(categories, subcategories)
  .reduce((acc, category) => {
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
