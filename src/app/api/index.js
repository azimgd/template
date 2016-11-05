import axios from 'axios';

export const getPages = () =>
  axios.get('//localhost:8080/api/pages')
  .then(res => res.data);
