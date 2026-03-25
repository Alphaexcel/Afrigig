import axios from "axios";


const API = axios.create({
  baseURL: "http://localhost:5000/api",
});


export const registerUser = (userData) => API.post("/auth/register", userData);
export const loginUser = (userData) => API.post("/auth/login", userData);
export const getTasks = () => API.get("/tasks");
export const createTask = (taskData, token) =>
  API.post("/tasks", taskData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


export const getProfile = (token) =>
  API.get("/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


export const updateProfile = (profileData, token) =>
  API.put("/users/me", profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
