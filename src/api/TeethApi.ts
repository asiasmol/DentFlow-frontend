import {authorizedApi} from "../hooks/withAxiosIntercepted";
import {Tooth} from "../models/Tooth";

export class TeethApi {
    static async safeToothStatus(request: { clinicId: number | undefined; tooth:Tooth |null; patientId: number | undefined }) {
        await authorizedApi.patch('/teeth/status', request)
    }

    static async safeToothDescription(request: { clinicId: number | undefined; patientId: number | undefined; tooth: Tooth | null }) {
        await authorizedApi.patch('/teeth/description', request)
    }
}