import axios from "axios";
import { handleError } from "../utils/ErrorHandler";
import { UserJWT } from "../Models/UserJwt";

const api = "http://localhost:8080/api";

export const loginApi = async (username: string, password: string) => {
  try {
    const data = await axios.post<UserJWT>(api + "user/login", {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
