import axios from 'axios'

const API_URL = 'https://localhost:7088/api/products';

export const getProducts = () => {
    return axios.get(API_URL);
};

export const getProductById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

export const addProduct = (product) => {
    return axios.post(API_URL, product);
};

export const updateProduct = (id, product) => {
    return axios.put(`${API_URL}/${id}`, product);
};

export const patchProduct = (id, product) =>{
    return axios.patch(`${API_URL}/${id}`, product);
};

export const deleteProduct = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
