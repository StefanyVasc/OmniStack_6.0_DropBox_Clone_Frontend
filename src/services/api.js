import axios from "axios";

const api = axios.create({
  baseURL: "https://omnistack-6-backend.herokuapp.com"
});

export default api;
