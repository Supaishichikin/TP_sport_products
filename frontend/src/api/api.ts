import axios from "axios";
import { handleError } from "./util";

export const API_URL = "http://localhost:8030";

export {
  deleteUser,
  getAllUsers,
  getUserById,
  sendLoginRequest,
  sendRefreshTokenRequest,
  sendRegisterRequest,
  updateUser,
} from "./users";

export async function apiTest() {
  try {
    const { data } = await axios.get(API_URL);
    return data;
  } catch (error) {
    handleError(error);
  }
}
