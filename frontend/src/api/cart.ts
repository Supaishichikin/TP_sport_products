import axios from "axios";
import { API_URL } from "./api";
import { handleError } from "./util";

// TODO: remplacer les any par des types plus précis

export async function getCartByUserId(id: string) {
  try {
    const { data: cart } = await axios.get(`${API_URL}/cart/${id}`);
    return cart;
  } catch (error) {
    handleError(error);
  }
}

export async function postCart(id: string, cart: any) {
  try {
    const { data: newCart } = await axios.post(`${API_URL}/cart/${id}`, cart);
    return newCart;
  } catch (error) {
    handleError(error);
  }
}

export async function updateCart(id: string, cart: any) {
  try {
    const { data: updatedCart } = await axios.put(
      `${API_URL}/cart/${id}`,
      cart
    );
    return updatedCart;
  } catch (error) {
    handleError(error);
  }
}

export async function deleteFromCart(id: string) {
  try {
    const { data } = await axios.delete(`${API_URL}/cart/${id}`);
    return data;
  } catch (error) {
    handleError(error);
  }
}
