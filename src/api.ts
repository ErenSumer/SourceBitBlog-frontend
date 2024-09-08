import axios from "axios";

const API_URL = "http://localhost:4000";

export const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
// Authentication
export const signup = (userData: {
  username: string;
  password: string;
}) => api.post("/users", userData);

export const login = (userData: {
   username:string,
   password: string }) => api.post("/user/login", userData);

   // api.ts


// Blog Posts
export const getPosts = () => api.get("/blogs");
