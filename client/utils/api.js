import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = axios.create({
  baseURL: "http://192.168.100.11:3001/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(async (config) => {
  const publicRoutes = ["/register", "/login"];
  const shouldSkipAuth = publicRoutes.some(route => config.url?.includes(route));

  if (shouldSkipAuth) {
    console.log("📤 No token sent for public route:", config.url);
    return config;
  }

  const token = await AsyncStorage.getItem("token");
  console.log("📤 Sending token in header:", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


export default API;
