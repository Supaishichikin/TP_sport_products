export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
  role: "USER" | "ADMIN";
}

export type UserWithoutPwd = Omit<User, "password">;
