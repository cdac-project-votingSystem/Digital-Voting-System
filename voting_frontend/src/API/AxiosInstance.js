// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "http://localhost:8080", 
// //   withCredentials: true,
// });


// axiosInstance.interceptors.request.use(
//     (config) => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         config.headers.Authorization = token;
//       } else {
//         console.warn("No token found, sending request without Authorization header.");
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );
  
// export default axiosInstance ;
