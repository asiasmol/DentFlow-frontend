import {Tooth} from "../Tooth";

export type PatientResponse = {
    patientId:number,
    firstName: string,
    lastName: string,
    email: string,
    birthDate: string,
    pesel: string,
    phoneNumber: string,
    teeth : Tooth[];
}