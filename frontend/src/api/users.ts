import axios from "axios";
import { API_URL } from "./api";
import { handleError } from "./util";

// TODO: remplacer les any par des types plus précis

export async function sendRegisterRequest(user: any) {
  try {
    const { data } = await axios.post(`${API_URL}/register`, user);
    return { data };
  } catch (error) {
    handleError(error);
  }
}

export async function sendLoginRequest(email: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/login`, {email: email, password: password});
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function sendRefreshTokenRequest({
  refreshToken,
}: {
  refreshToken: string;
}) {
  try {
    const { data } = await axios.post(`${API_URL}/refresh-token`, {
      refreshToken,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
}

export async function getAllUsers() {
  try {
    const { data: users } = await axios.get(`${API_URL}/users`);
    return { users };
  } catch (error) {
    handleError(error);
  }
}

export async function getUserById(id: string) {
  try {
    const { data: user } = await axios.get(`${API_URL}/users/${id}`);
    return user;
  } catch (error) {
    handleError(error);
  }
}

export async function updateUser(id: string, user: any) {
  try {
    const { data: updatedUser } = await axios.put(
      `${API_URL}/users/${id}`,
      user
    );
    return updatedUser;
  } catch (error) {
    handleError(error);
  }
}

export async function deleteUser(id: string) {
  try {
    const { data } = await axios.delete(`${API_URL}/users/${id}`);
    return data;
  } catch (error) {
    handleError(error);
  }
}
