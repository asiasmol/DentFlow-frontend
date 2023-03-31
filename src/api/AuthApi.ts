import axios from "axios";
import { SignInRequest } from "../models/api/SignInRequest";
import { SignInResponse } from "../models/api/SignInResponse";

export class AuthApi {
  static signIn = async (request: SignInRequest) =>
    await axios.post<SignInResponse>("http://localhost:8080/api/auth/authenticate", request);
}
