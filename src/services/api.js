import axios from "axios";
const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  timeout: 10000
});
export default api;