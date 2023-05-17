export type UserRegistrationData = {
    firstName: string,
    lastName: string,
    pesel: string,
    birthDate: string | undefined,
    email: string,
    password: string,
    telNumber?: string
}