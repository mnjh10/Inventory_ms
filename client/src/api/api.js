// src/api/api.js
import axios from "axios";

// Base URL for backend
const API_BASE_URL = "http://localhost:5000";

// Axios instance
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// LOGIN
export const loginUser = async (credentials) => {
    const response = await api.post("/api/auth/login", credentials);
    return response.data;
};

// GET all products
export const getProducts = async () => {
    const response = await api.get("/api/products");
    return response.data;
};

// ADD a new product
export const addProduct = async (productData) => {
    const response = await api.post("/api/products", productData);
    return response.data;
};

// UPDATE product
export const updateProduct = async (id, updatedData) => {
    const response = await api.put('/api/products/${id}', updatedData);
    return response.data;
};

// DELETE product
export const deleteProduct = async (id) => {
    const response = await api.delete('/api/products/${id}');
    return response.data;
};

// GET logs
export const getLogs = async () => {
    const response = await api.get("/api/logs");
    return response.data;
};

// GET reports
export const getReports = async () => {
    const response = await api.get("/api/reports");
    return response.data;
};
// Example: Fetch Dashboard Stats
export const fetchDashboardStats = async () => {
    const response = await api.get("/api/dashboard/stats");
    return response.data;
};