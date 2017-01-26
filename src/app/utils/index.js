import _ from 'lodash';

export const transformYupValidationErrors = res => _.reduce(res.inner, (acc, item) => {
  _.set(acc, item.path, item.errors.join());
  return acc;
}, { _error: res.message });

export const isInputArrayContentEmpty = arrayContent => _.chain(arrayContent).map(item => _.isEmpty(item)).without(true).value().length === 0;

export const generateFilePreviewAsync = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = () => reject('nope');
  reader.readAsDataURL(file);
});

export const randomString = () => Math.random().toString(36).substring(7);
