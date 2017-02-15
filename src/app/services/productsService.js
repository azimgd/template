import _ from 'lodash';

export const transformProductImages = (images, { uniqueProductId }) => _.map(images, item => ({ ...item, ...{ uniqueProductId } }));

export const mapProductImagesToAmazonUrl = images => _.chain(images)
  .filter(item => item.filename)
  .map(item => `https://shoptemplate.s3-eu-west-1.amazonaws.com/${item.filename}`)
  .value();

export const mapProductOptions = (product, productOptions) => {
  const details = [
    { key: 'Category', value: product.category },
    { key: 'SubCategory', value: product.subCategory },
  ];
  return [...productOptions, ...details];
};

/**
 * Function will take an array of ({ category }) and ({ product }) object
 * will return category object for given product
 */
export const findProductsCategory = (categories, product) =>
  _.find(categories, ['id', product.categoryId]);

/**
 * Function will take an array of ({ subcategory }) and ({ product }) object
 * will return subcategory object for given product
 */
export const findProductsSubCategory = (subcategories, product) =>
  _.find(subcategories, ['id', product.subCategoryId]);

/**
 * Function will take an array of ({product})
 * and array of ({category}) already mapped to ({subcategory})
 * will return an array of ({ product: { category: { subcategory } }})
 */
export const mapProductsToSubAndCategories = (products, categories, subcategories) => _.reduce(products, (acc, product) => {
  const category = findProductsCategory(categories, product);
  const subcategory = findProductsSubCategory(subcategories, product);
  acc.push({ ...product, ...({ category, subcategory }) });
  return acc;
}, []);
