import axios from "axios";

const httpInstance = axios.create({
  baseURL: "https://api.football-data.org/v4",
  headers: {
    "X-Auth-Token": import.meta.env.VITE_API_TOKEN,
  },
});
export default httpInstance;
