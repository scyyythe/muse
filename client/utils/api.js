import axios from "axios";

const API = axios.create({
  baseURL: "http://192.168.100.11:3001/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
