import axios from "axios";

const API_URL = "http://localhost:8030";

// TODO: remplacer les any par des types plus précis

export async function sendRegisterRequest(user: any) {
  try {
    const response = await axios.post(`${API_URL}/register`, user);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function sendLoginRequest(user: any) {
  try {
    const response = await axios.post(`${API_URL}/login`, user);
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
    const response = await axios.post(`${API_URL}/refresh-token`, {
      refreshToken,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function getAllUsers() {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function getUserById(id: string) {
  try {
    const response = await axios.get(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function updateUser(id: string, user: any) {
  try {
    const response = await axios.put(`${API_URL}/users/${id}`, user);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function deleteUser(id: string) {
  try {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function apiTest() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

function handleError(err: unknown) {
  if (err instanceof Error) return err.message;
}
