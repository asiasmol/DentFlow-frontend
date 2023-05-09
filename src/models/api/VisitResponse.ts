import {EmployeeResponse} from "./EmployeeResponse";
import {PatientResponse} from "./PatientResponse";

export type VisitResponse = {
    description: string,
    doctor:EmployeeResponse,
    patient:PatientResponse,
    visitDate: string
    id: number;
}