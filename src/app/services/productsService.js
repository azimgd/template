import _ from 'lodash';

export const transformProductImages = (images, { uniqueProductId }) => _.map(images, item => ({ ...item, ...{ uniqueProductId } }));

export const mapProductImagesToAmazonUrl = images => _.chain(images)
  .filter(item => item.filename)
  .map(item => `https://shoptemplate.s3-eu-west-1.amazonaws.com/${item.filename}`)
  .value();

export const mapProductOptions = (product, productOptions) => {
  const details = [
    { key: 'Id', value: product.id },
    { key: 'City', value: product.productCity },
    { key: 'Category', value: product.category },
    { key: 'SubCategory', value: product.subCategory },
  ];
  return [...productOptions, ...details];
};
