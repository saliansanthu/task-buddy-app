import axios from "axios";

const API = axios.create({
  baseURL: "https://task-buddy-app.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
});

//AUTH
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);

//Pages
export const getPages = () => API.get("/task-buddy");
export const createPage = (page) => API.post("/task-buddy", page);
export const deletePage = (_id) => API.delete(`/task-buddy/${_id}`);

//Tasks
export const getTasks = (pageId) => API.get(`/task-buddy/${pageId}`);
export const createTask = (pageId, task) =>
  API.post(`/task-buddy/${pageId}`, task);
export const deleteTask = (pageId, taskId) =>
  API.delete(`/task-buddy/${pageId}/${taskId}`);
export const updateTask = (pageId, taskId, updatedTask) =>
  API.put(`/task-buddy/${pageId}/${taskId}`, updatedTask);
