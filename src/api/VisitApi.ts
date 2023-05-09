import {authorizedApi} from "../hooks/withAxiosIntercepted";
import { VisitRequest } from "../models/api/VisitRequest";

export class VisitApi {
    static add = async(request: VisitRequest) =>
        await authorizedApi.post("/visits", request)

    static getVisitsFromClinic = async(request: { clinicId: number | undefined }) =>
        await authorizedApi.get("/visits", {params:request})

    static async safeDescription(request: {description: string, visitId:number|undefined}) {
        await authorizedApi.post('/visits/description', request)
    }
}