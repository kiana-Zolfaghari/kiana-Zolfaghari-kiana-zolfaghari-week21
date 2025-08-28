import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3001" });

api.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);
export default api;
