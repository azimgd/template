import axios from 'axios';

/**
 * Pages
 */
export const getPages = () =>
  axios.get('//localhost:8080/api/pages')
  .then(res => res.data);

export const getPage = ({ id }) =>
  axios.get(`//localhost:8080/api/pages/${id}`)
  .then(res => res.data);

export const postPage = (data) =>
  axios.post('//localhost:8080/api/pages', data)
  .then(res => res.data);


/**
 * Products
 */
export const getProducts = () =>
  axios.get('//localhost:8080/api/products')
  .then(res => res.data);

export const getProduct = ({ id }) =>
  axios.get(`//localhost:8080/api/products/${id}`)
  .then(res => res.data);

export const postProduct = (data) =>
  axios.post('//localhost:8080/api/products', data)
  .then(res => res.data);


/**
 * Page categories
 */
export const getPageCategories = () =>
  axios.get('//localhost:8080/api/pageCategories')
  .then(res => res.data);

export const getPageCategory = ({ id }) =>
  axios.get(`//localhost:8080/api/pageCategories/${id}`)
  .then(res => res.data);

export const postPageCategory = (data) =>
  axios.post('//localhost:8080/api/pageCategories', data)
  .then(res => res.data);


/**
 * Page sub categories
 */
export const getPageSubCategories = () =>
  axios.get('//localhost:8080/api/pageSubCategories')
  .then(res => res.data);

export const getPageSubCategory = ({ id }) =>
  axios.get(`//localhost:8080/api/pageSubCategories/${id}`)
  .then(res => res.data);

export const postPageSubCategory = (data) =>
  axios.post('//localhost:8080/api/pageSubCategories', data)
  .then(res => res.data);


/**
 * Product categories
 */
export const getProductCategories = () =>
  axios.get('//localhost:8080/api/productCategories')
  .then(res => res.data);

export const getProductCategory = ({ id }) =>
  axios.get(`//localhost:8080/api/productCategories/${id}`)
  .then(res => res.data);

export const postProductCategory = (data) =>
  axios.post('//localhost:8080/api/productCategories', data)
  .then(res => res.data);


/**
 * Product sub categories
 */
export const getProductSubCategories = () =>
  axios.get('//localhost:8080/api/productSubCategories')
  .then(res => res.data);

export const getProductSubCategory = ({ id }) =>
  axios.get(`//localhost:8080/api/productSubCategories/${id}`)
  .then(res => res.data);

export const postProductSubCategory = (data) =>
  axios.post('//localhost:8080/api/productSubCategories', data)
  .then(res => res.data);
