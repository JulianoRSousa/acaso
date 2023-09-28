import axios from 'axios';

const baseURL = 'https://api.staging.aca.so';

export const acasoApi = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  timeoutErrorMessage: `The aca.so API request was rejected by timeout`,
//   headers: {Authorization: `Bearer ${authData?.token ?? ''}`}
});
