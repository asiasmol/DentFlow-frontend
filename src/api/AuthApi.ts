import axios from "axios";
import { SignInRequest } from "../models/api/SignInRequest";
import { SignInResponse } from "../models/api/SignInResponse";

export class AuthApi {
  static signIn = async (request: SignInRequest) =>
    await axios.post<SignInResponse>("auth/authenticate", request);
  static SendResetEmail = async (request:{email:string}) =>
      await axios.post("/resetPassword",request);
  static ResetPassword = async (request:{password:string|null,token:string|null}) =>
      await axios.patch("/resetPassword",request);
}
