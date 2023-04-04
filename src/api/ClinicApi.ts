import { authorizedApi } from "../hooks/withAxiosIntercepted";
import {ClinicResponse} from "../models/api/ClinicResponse";

export class ClinicApi {
    static getAll = async () =>
        await authorizedApi.get<ClinicResponse[]>("/clinics/all");
}
