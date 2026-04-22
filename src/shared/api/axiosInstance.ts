import axios from "axios";

const api = axios.create({
  baseURL: "/",
  headers: {
    "X-Auth-Token": import.meta.env.VITE_API_TOKEN,
  },
});
export default api;
