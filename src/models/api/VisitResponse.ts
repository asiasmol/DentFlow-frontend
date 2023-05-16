import {EmployeeResponse} from "./EmployeeResponse";
import {PatientResponse} from "./PatientResponse";

export type VisitResponse = {
    clinicName:string
    doctorDescription: string,
    receptionistDescription: string,
    doctor:EmployeeResponse,
    patient:PatientResponse,
    visitDate: string
    type:string,
    id: number;
    lengthOfTheVisit: number
}