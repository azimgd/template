import axios from 'axios';

export const getPages = () =>
  axios.get('//localhost:8080/api/pages')
  .then(res => res.data);

export const getPage = ({ id }) =>
  axios.get(`//localhost:8080/api/pages/${id}`)
  .then(res => res.data);

export const postPage = (data) =>
  axios.post('//localhost:8080/api/pages', data)
  .then(res => res.data);

export const getProducts = () =>
  axios.get('//localhost:8080/api/products')
  .then(res => res.data);

export const getProduct = ({ id }) =>
  axios.get(`//localhost:8080/api/products/${id}`)
  .then(res => res.data);

export const postProduct = (data) =>
  axios.post('//localhost:8080/api/products', data)
  .then(res => res.data);
