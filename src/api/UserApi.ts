import { authorizedApi } from "../hooks/withAxiosIntercepted";
import { UserResponse } from "../models/api/UserResponse";

export class UserApi {
  static getUser = async () =>
    await authorizedApi.get<UserResponse>("/users/getUser");
}
