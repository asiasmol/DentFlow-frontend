
export type VisitRequest = {
    clinicId:number | undefined,
    receptionistDescription: string,
    visitDate:string | undefined,
    type: string,
    visitTime:string,
    doctorEmail:string | undefined,
    patientId:number | undefined,
    lengthOfTheVisit:number
}