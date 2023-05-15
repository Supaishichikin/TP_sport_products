import axios from "axios";
import { API_URL } from "./api";
import { handleError } from "./util";

// TODO: remplacer les any par des types plus précis

export async function getAllSports() {
  try {
    const { data: sports } = await axios.get(`${API_URL}/sports`);
    return sports;
  } catch (error) {
    handleError(error);
  }
}

export async function getSportById(id: string) {
  try {
    const { data: sport } = await axios.get(`${API_URL}/sports/${id}`);
    return sport;
  } catch (error) {
    handleError(error);
  }
}

export async function createSport(sport: any) {
  try {
    const { data } = await axios.post(`${API_URL}/sports`, sport);
    return data;
  } catch (error) {
    handleError(error);
  }
}

export async function updateSport(id: string, sport: any) {
  try {
    const { data } = await axios.put(`${API_URL}/sports/${id}`, sport);
    return data;
  } catch (error) {
    handleError(error);
  }
}

export async function deleteSport(id: string) {
  try {
    const { data } = await axios.delete(`${API_URL}/sports/${id}`);
    return data;
  } catch (error) {
    handleError(error);
  }
}
