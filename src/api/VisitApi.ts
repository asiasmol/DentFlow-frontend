import {authorizedApi} from "../hooks/withAxiosIntercepted";
import { VisitRequest } from "../models/api/VisitRequest";

export class VisitApi {
    static add = async(request: VisitRequest) =>
        await authorizedApi.post("/visits", request)

    static getVisitsFromClinic = async(request: { clinicId: number | undefined }) =>
        await authorizedApi.get("/visits", {params:request})
}