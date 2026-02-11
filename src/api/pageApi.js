import axiosInstance from "./axiosInstance"; // Adjust the import path as needed

export const getPages = () => axiosInstance.get("/pages");
export const getPage = (id) => axiosInstance.get(`/pages/${id}`);
export const createPage = (data) => axiosInstance.post("/pages", data);
export const updatePage = (id, data) => axiosInstance.put(`/pages/${id}`, data);
export const deletePage = (id) => axiosInstance.delete(`/pages/${id}`);