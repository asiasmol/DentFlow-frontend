import { authorizedApi } from "../hooks/withAxiosIntercepted";
import {ClinicResponse} from "../models/api/ClinicResponse";
import {ClinicRequest} from "../models/api/ClinicRequest";
import {EmployeeResponse} from "../models/api/EmployeeResponse";
import {EmployeeRequest} from "../models/api/EmployeeRequest";
import {PatientResponse} from "../models/api/PatientResponse";
import {VisitResponse} from "../models/api/VisitResponse";

export class ClinicApi {
    static getAllClinics = async () =>
        await authorizedApi.get<ClinicResponse[]>("/clinics");
    static getClinicWhereWork = async () =>
        await authorizedApi.get<ClinicResponse[]>("/clinics/myClinics");

    static register = async (request: ClinicRequest) =>
        await authorizedApi.post("/clinics", request);

    static getMyClinic = async () =>
        await authorizedApi.get<ClinicResponse>("/clinics/myClinic");

    static getEmployees = async () =>
        await authorizedApi.get<EmployeeResponse[]>("/clinics/personnel");

    static getPatients = async (request: {clinicId: number | undefined}) =>
        await authorizedApi.get<PatientResponse[]>("/clinics/patients", {params:request});
    static addEmployees = async (request:EmployeeRequest) =>
        await authorizedApi.patch("/clinics/personnel",request);
    static deleteEmployee = async(request: { email: string | undefined }) =>
        await authorizedApi.delete("/clinics/personnel", { data: request })

    static getDoctors = async (request: { clinicId: number | undefined }) =>
        await authorizedApi.get<EmployeeResponse[]>("/clinics/myDoctors", {params:request});

    static getDoctorsForClinic = async (request: { clinicId: number | undefined }) =>
        await authorizedApi.get<EmployeeResponse[]>("/clinics/doctors", {params:request});
    static getVisitsForClinic = async (request: { clinicId: number | undefined }) =>
        await authorizedApi.get<VisitResponse[]>("/clinics/visits", {params:request});
}
