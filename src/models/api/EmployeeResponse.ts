import {HoursOfAvailabilityResponse} from "./HoursOfAvailabilityResponse";

export type EmployeeResponse = {
    firstName:string
    lastName:string
    email:string
    hoursOfAvailability:HoursOfAvailabilityResponse[]
    roles:string[]
}