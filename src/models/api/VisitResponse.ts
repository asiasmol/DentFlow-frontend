import {EmployeeResponse} from "./EmployeeResponse";
import {PatientResponse} from "./PatientResponse";

export type VisitResponse = {
    doctorDescription: string,
    receptionistDescription: string,
    doctor:EmployeeResponse,
    patient:PatientResponse,
    visitDate: string
    id: number;
    lengthOfTheVisit: number
}