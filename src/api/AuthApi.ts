import axios from "axios";
import { SignInRequest } from "../models/api/SignInRequest";
import { SignInResponse } from "../models/api/SignInResponse";
import {authorizedApi} from "../hooks/withAxiosIntercepted";

export class AuthApi {
  static signIn = async (request: SignInRequest) =>
    await axios.post<SignInResponse>("auth/authenticate", request);
  static SendResetPasswordEmail = async (request:{email:string}) =>
      await axios.post("/resetPassword",request);
  static ResetPassword = async (request:{password:string|null,token:string|null}) =>
      await axios.patch("/resetPassword",request);

    static async SendResetEmailEmail() {
      await authorizedApi.post("/resetEmail");
    }

  static async ResetEmail(request: { email: string; token: string |null}) {
    await axios.patch("/resetEmail",request);
  }
}
