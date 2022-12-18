import Axios from 'axios';

const apiClient = Axios.create({
baseURL: process.env.REACT_APP_API_ENTRYPOINT,
})

apiClient.interceptors.request.use((request) => ({
  ...request,
}));

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);

export {apiClient};