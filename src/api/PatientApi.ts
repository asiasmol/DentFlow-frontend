import {authorizedApi} from "../hooks/withAxiosIntercepted";
import {PatientRequest} from "../models/api/PatientRequest";
import {PatientResponse} from "../models/api/PatientResponse";
import {PatientInfoRequest} from "../models/api/PatientInfoRequest";

export class PatientApi {
    static register = async(request: PatientRequest) =>
        await authorizedApi.post("/patients", request)

    static getVisitInfo = async(request: PatientInfoRequest)=> {
        const requestBody = {
            patientId: request.patientId,
            clinicId: request.clinicId
        }

        const response = await authorizedApi.get<PatientResponse>("/patients",
            {params: requestBody})
    }

}