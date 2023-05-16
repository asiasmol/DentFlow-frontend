export type AskVisitRequest = {
    clinicId:number | undefined,
    receptionistDescription: string,
    visitDate:string | undefined,
    visitTime:string,
    type:string,
    doctorEmail:string | undefined,
    lengthOfTheVisit: number
}