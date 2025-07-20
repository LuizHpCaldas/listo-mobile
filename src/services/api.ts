import axios from "axios";
import * as SecureStore from "expo-secure-store";

const API_URL = "http://sua-api.com/api"; // Substitua pela sua URL

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token inválido - fazer logout
      const authContext = require("../contexts/AuthContext").useAuth();
      authContext.logout();
    }
    return Promise.reject(error);
  }
);

export default api;
