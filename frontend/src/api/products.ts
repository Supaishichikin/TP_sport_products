import axios from "axios";
import { API_URL } from "./api";
import { handleError } from "./util";

// TODO: remplacer les any par des types plus précis

// TODO: produits par page et par sports

export async function getAllProducts() {
  try {
    const { data: products } = await axios.get(`${API_URL}/products`);
    return products;
  } catch (error) {
    handleError(error);
  }
}

export async function getProductById(id: string) {
  try {
    const { data: product } = await axios.get(`${API_URL}/products/${id}`);
    return product;
  } catch (error) {
    handleError(error);
  }
}

export async function createProduct(product: any) {
  try {
    const { data } = await axios.post(`${API_URL}/products`, product);
    return data;
  } catch (error) {
    handleError(error);
  }
}

export async function updateProduct(id: string, product: any) {
  try {
    const { data } = await axios.put(`${API_URL}/products/${id}`, product);
    return data;
  } catch (error) {
    handleError(error);
  }
}

export async function deleteProduct(id: string) {
  try {
    const { data } = await axios.delete(`${API_URL}/products/${id}`);
    return data;
  } catch (error) {
    handleError(error);
  }
}
