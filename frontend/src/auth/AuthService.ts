
import { sendLoginRequest, sendRefreshTokenRequest } from '../api/api';

const AuthService = {
  login: async (email: string, password: string) => sendLoginRequest(email, password)
,
  refreshAccessToken: async (refreshToken: string) => sendRefreshTokenRequest({refreshToken: refreshToken}),
};

export default AuthService;