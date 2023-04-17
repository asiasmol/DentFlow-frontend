import {authorizedApi} from "../hooks/withAxiosIntercepted";
import {PatientRequest} from "../models/api/PatientRequest";

export class PatientApi {
    static register = async(request: PatientRequest) =>
        await authorizedApi.post("/patients", request)
}