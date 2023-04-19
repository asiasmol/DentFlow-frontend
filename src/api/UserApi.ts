import { authorizedApi } from "../hooks/withAxiosIntercepted";
import { UserResponse } from "../models/api/UserResponse";
import axios from "axios";
import {UserRegistrationData} from "../models/api/UserRegistrationData";
import {ProfileUserResponse} from "../models/api/ProfileUserResponse";
import {UserUpdateData} from "../models/api/UserUpdateData";

export class UserApi {
  static getUser = async () =>
    await authorizedApi.get<UserResponse>("/users/getUser");

  static registerUser = async (request: UserRegistrationData) =>
      await axios.post("/auth/register", request);

  static getProfileUser = async () =>
      await authorizedApi.get<ProfileUserResponse>("/users/profile");

  static getAllEmails = async () =>
      await authorizedApi.get<string[]>("/users");

  static updateUser = async (request: UserUpdateData) =>
      await authorizedApi.patch("/users/profile", request)
}
