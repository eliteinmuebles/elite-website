import axios from "axios"; 

const httpClient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      'Content-Type': 'application/json',
    },
});
  
httpClient.interceptors.request.use(
    config => {
      const token = localStorage.getItem("token_user");
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
);

export default httpClient;