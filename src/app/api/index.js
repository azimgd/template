import requestProvider from './requestProvider';

/**
 * Pages
 */
export const postLogin = (data) =>
  requestProvider.post('/api/users/login', data)
  .then(res => res.data);

/**
 * Pages
 */
export const getPages = (data) =>
  requestProvider.get('/api/pages', { params: data })
  .then(res => res.data);

export const getPage = ({ id }) =>
  requestProvider.get(`/api/pages/${id}`)
  .then(res => res.data);

export const postPage = (data) =>
  requestProvider.post('/api/pages', data)
  .then(res => res.data);


/**
 * Products
 */
export const getProducts = (data) =>
  requestProvider.get('/api/products', { params: data })
  .then(res => res.data);

export const getProduct = ({ id }) =>
  requestProvider.get(`/api/products/${id}`)
  .then(res => res.data);

export const postProduct = (data) =>
  requestProvider.post('/api/products', data)
  .then(res => res.data);

export const getProductSuggest = (data) =>
  requestProvider.get('/api/products/autocomplete', { params: data })
  .then(res => res.data);

/**
 * Page categories
 */
export const getPageCategories = () =>
  requestProvider.get('/api/pageCategories')
  .then(res => res.data);

export const getPageCategory = ({ id }) =>
  requestProvider.get(`/api/pageCategories/${id}`)
  .then(res => res.data);

export const postPageCategory = (data) =>
  requestProvider.post('/api/pageCategories', data)
  .then(res => res.data);


/**
 * Page sub categories
 */
export const getPageSubCategories = () =>
  requestProvider.get('/api/pageSubCategories')
  .then(res => res.data);

export const getPageSubCategory = ({ id }) =>
  requestProvider.get(`/api/pageSubCategories/${id}`)
  .then(res => res.data);

export const postPageSubCategory = (data) =>
  requestProvider.post('/api/pageSubCategories', data)
  .then(res => res.data);


/**
 * Product categories
 */
export const getProductCategories = () =>
  requestProvider.get('/api/productCategories')
  .then(res => res.data);

export const getProductCategory = ({ id }) =>
  requestProvider.get(`/api/productCategories/${id}`)
  .then(res => res.data);

export const postProductCategory = (data) =>
  requestProvider.post('/api/productCategories', data)
  .then(res => res.data);


/**
 * Product sub categories
 */
export const getProductSubCategories = () =>
  requestProvider.get('/api/productSubCategories')
  .then(res => res.data);

export const getProductSubCategory = ({ id }) =>
  requestProvider.get(`/api/productSubCategories/${id}`)
  .then(res => res.data);

export const postProductSubCategory = (data) =>
  requestProvider.post('/api/productSubCategories', data)
  .then(res => res.data);

/**
 * Product categories
 */
export const getProductOptions = (data) =>
  requestProvider.get('/api/productOptions', { params: data })
  .then(res => res.data);

export const getDistinctProductOptions = (data) =>
  requestProvider.get('/api/productOptions/distinct', { params: data })
  .then(res => res.data);

export const getProductOption = ({ id }) =>
  requestProvider.get(`/api/productOptions/${id}`)
  .then(res => res.data);

export const postProductOption = (data) =>
  requestProvider.post('/api/productOptions', data)
  .then(res => res.data);

/**
 * Product images
 */
export const getProductImages = (data) =>
  requestProvider.get('/api/productImages', { params: data })
  .then(res => res.data);

export const getProductImage = ({ id }) =>
  requestProvider.get(`/api/productImages/${id}`)
  .then(res => res.data);

export const postProductImage = (data) =>
  requestProvider.post('/api/productImages', data)
  .then(res => res.data);
