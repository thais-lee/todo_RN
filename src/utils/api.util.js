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
  if (token) {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axiosConfig.headers = headers;
  }
  try {
    const response = await axios(axiosConfig);
    return response.data;

  } catch (error) {
    console.log(error.message);
  }
}
