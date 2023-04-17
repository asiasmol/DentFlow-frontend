import { authorizedApi } from "../hooks/withAxiosIntercepted";
import {ClinicResponse} from "../models/api/ClinicResponse";
import {ClinicRequest} from "../models/api/ClinicRequest";
import {EmployeeResponse} from "../models/api/EmployeeResponse";
import {EmployeeRequest} from "../models/api/EmployeeRequest";

export class ClinicApi {
    static getClinicWhereWork = async () =>
        await authorizedApi.get<ClinicResponse[]>("/clinics/myClinics");

    static register = async (request:ClinicRequest) =>
        await authorizedApi.post("/clinics",request);

    static getMyClinic = async () =>
        await authorizedApi.get<ClinicResponse>("/clinics/myClinic");

    static getEmployees = async () =>
        await authorizedApi.get<EmployeeResponse[]>("/clinics/personnel");
    static addEmployees = async (request:EmployeeRequest) =>
        await authorizedApi.patch("/clinics/personnel",request);
}
