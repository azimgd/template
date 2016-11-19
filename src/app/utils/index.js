import _ from 'lodash';
import * as constants from 'constants/index';

export const transformYupValidationErrors = res => _.reduce(res.inner, (acc, item) => {
  _.set(acc, item.path, item.errors.join());
  return acc;
}, { _error: res.message });

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

export const getSucceededNotifications = notifications => _.filter(notifications, notification => notification.status === constants.STATUS_SUCCESS);

export const getFailedNotifications = notifications => _.filter(notifications, notification => notification.status === constants.STATUS_FAILURE);

export const isInputArrayContentEmpty = arrayContent => _.chain(arrayContent).map(item => _.isEmpty(item)).without(true).value().length === 0;

export const generateFilePreviewAsync = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = () => reject('nope');
  reader.readAsDataURL(file);
});
