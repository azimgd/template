import axios from 'axios';

/**
 * Pages
 */
export const getPages = (data) =>
  axios.get(`${API_ENDPOINT}/api/pages`, { params: data })
  .then(res => res.data);

export const getPage = ({ id }) =>
  axios.get(`${API_ENDPOINT}/api/pages/${id}`)
  .then(res => res.data);

export const postPage = (data) =>
  axios.post(`${API_ENDPOINT}/api/pages`, data)
  .then(res => res.data);


/**
 * Products
 */
export const getProducts = (data) =>
  axios.get(`${API_ENDPOINT}/api/products`, { params: data })
  .then(res => res.data);

export const getProduct = ({ id }) =>
  axios.get(`${API_ENDPOINT}/api/products/${id}`)
  .then(res => res.data);

export const postProduct = (data) =>
  axios.post(`${API_ENDPOINT}/api/products`, data)
  .then(res => res.data);


/**
 * Page categories
 */
export const getPageCategories = () =>
  axios.get(`${API_ENDPOINT}/api/pageCategories`)
  .then(res => res.data);

export const getPageCategory = ({ id }) =>
  axios.get(`${API_ENDPOINT}/api/pageCategories/${id}`)
  .then(res => res.data);

export const postPageCategory = (data) =>
  axios.post(`${API_ENDPOINT}/api/pageCategories`, data)
  .then(res => res.data);


/**
 * Page sub categories
 */
export const getPageSubCategories = () =>
  axios.get(`${API_ENDPOINT}/api/pageSubCategories`)
  .then(res => res.data);

export const getPageSubCategory = ({ id }) =>
  axios.get(`${API_ENDPOINT}/api/pageSubCategories/${id}`)
  .then(res => res.data);

export const postPageSubCategory = (data) =>
  axios.post(`${API_ENDPOINT}/api/pageSubCategories`, data)
  .then(res => res.data);


/**
 * Product categories
 */
export const getProductCategories = () =>
  axios.get(`${API_ENDPOINT}/api/productCategories`)
  .then(res => res.data);

export const getProductCategory = ({ id }) =>
  axios.get(`${API_ENDPOINT}/api/productCategories/${id}`)
  .then(res => res.data);

export const postProductCategory = (data) =>
  axios.post(`${API_ENDPOINT}/api/productCategories`, data)
  .then(res => res.data);


/**
 * Product sub categories
 */
export const getProductSubCategories = () =>
  axios.get(`${API_ENDPOINT}/api/productSubCategories`)
  .then(res => res.data);

export const getProductSubCategory = ({ id }) =>
  axios.get(`${API_ENDPOINT}/api/productSubCategories/${id}`)
  .then(res => res.data);

export const postProductSubCategory = (data) =>
  axios.post(`${API_ENDPOINT}/api/productSubCategories`, data)
  .then(res => res.data);

/**
 * Product categories
 */
export const getProductOptions = () =>
  axios.get(`${API_ENDPOINT}/api/productOptions`)
  .then(res => res.data);

export const getProductOption = ({ id }) =>
  axios.get(`${API_ENDPOINT}/api/productOptions/${id}`)
  .then(res => res.data);

export const postProductOption = (data) =>
  axios.post(`${API_ENDPOINT}/api/productOptions`, data)
  .then(res => res.data);

/**
 * Product images
 */
export const getProductImages = () =>
  axios.get(`${API_ENDPOINT}/api/productImages`)
  .then(res => res.data);

export const getProductImage = ({ id }) =>
  axios.get(`${API_ENDPOINT}/api/productImages/${id}`)
  .then(res => res.data);

export const postProductImage = (data) =>
  axios.post(`${API_ENDPOINT}/api/productImages`, data)
  .then(res => res.data);
