import {authorizedApi} from "../hooks/withAxiosIntercepted";
import { VisitRequest } from "../models/api/VisitRequest";
import {AskVisitRequest} from "../models/api/AskVisitRequest";

export class VisitApi {
    static add = async (request: VisitRequest) =>
        await authorizedApi.post("/visits", request)

    static getVisitsFromClinic = async(request: { clinicId: number | undefined }) =>
        await authorizedApi.get("/visits", {params:request})

    static async safeDescription(request: {clinicId: number | undefined, visitId:number|undefined,doctorDescription: string}) {
        await authorizedApi.post('/visits/doctorDescription', request)
    }

    static async safeReceptionistDescriptionDescription(request: {
        clinicId: number | undefined;
        receptionistDescription: string | undefined;
        visitId: number | undefined
    }) {
        await authorizedApi.post('/visits/ReceptionistDescription', request)
    }

    static getDoctorVisitsFromClinic = async(request: { clinicId: number | undefined }) =>
        await authorizedApi.get("/visits/doctor", {params:request})

    static getMyVisits = async() =>
        await authorizedApi.get("/visits/myVisits", )
    static addVisitUser = async(request: AskVisitRequest) =>
        await authorizedApi.post("/visits/addVisitUser", request)
}