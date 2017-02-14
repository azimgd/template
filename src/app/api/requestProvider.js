import axios from 'axios';

const requestProvider = () => {
  const instance = axios.create({
    baseURL: API_ENDPOINT,
  });

  return instance;
};

export default requestProvider();
