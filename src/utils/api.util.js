import axios from 'axios';
export const axiosMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export async function axiosRequest(config) {
  const {url, method, data, params, token} = config;

  const axiosConfig = {url, method, data, params};

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  if (token) {
    axios.headers = headers;
  }

  const response = await axios(axiosConfig);

  return response.data;
}
