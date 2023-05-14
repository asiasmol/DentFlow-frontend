import { authorizedApi } from "../hooks/withAxiosIntercepted";
import { UserResponse } from "../models/api/UserResponse";
import axios from "axios";
import {UserRegistrationData} from "../models/api/UserRegistrationData";
import {ProfileUserResponse} from "../models/api/ProfileUserResponse";
import {UserUpdateData} from "../models/api/UserUpdateData";
import {PatientResponse} from "../models/api/PatientResponse";
import {ClinicResponse} from "../models/api/ClinicResponse";
import {HoursOfAvailabilityRequest} from "../models/api/HoursOfAvailabilityRequest";
import {HoursOfAvailabilityResponse} from "../models/api/HoursOfAvailabilityResponse";

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
  static getAllMyPatientsAccountClinics = async () =>
      await authorizedApi.get<ClinicResponse[]>("/users/myPatientsAccounts");

  static addPatientsAccount = async (request:{ clinicId: number }) =>
      await authorizedApi.patch("/users/addPatientAccount",request);
  static updateUserHours = async (request:  HoursOfAvailabilityRequest[]) =>
      await authorizedApi.patch("/hours",request);

  static getHoursOfAvailability = async (param: { clinicId: number }) =>
      await authorizedApi.get<HoursOfAvailabilityResponse[]>("/hours",{params:param});

}
