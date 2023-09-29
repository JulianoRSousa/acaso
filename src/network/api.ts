import axios from 'axios';

const BASE_URL = 'https://api.staging.aca.so';
export const acasoApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  // headers: {Authorization: bearerToken},
});

acasoApi.defaults.headers.common['Content-Type'] = 'application/json';
