import axios from "axios";

// API instance 
const api = axios.create({
  baseURL: "/api", // connect to backend URL 
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // for backend cookies/session 
});



// req interceptor 
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



// res interceptor -> global errors handling 
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // You can handle specific status codes here
      if (error.response.status === 401) {
        console.log("Unauthorized! Redirecting to login...");
        // Optional: redirect to login page
        // window.location.href = "/login";
      }
      if (error.response.status === 500) {
        console.log("Server error!");
      }
    } else if (error.request) {
      console.log("No response received from server!");
    } else {
      console.log("Error setting up request:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
