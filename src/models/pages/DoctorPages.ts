import {link} from "../Link";
import {CLINIC_ID} from "../../constants/constants";

export const DoctorPages: link[] = [
    {
        label: "Moje przychodnie",
        link: "/clinics"
    },
    {
        label: "Obecna przychodnia",
        link: `/clinics/${localStorage.getItem(CLINIC_ID)}/visits`
    },
    {
        label:"Pacjenci",
        link: "/patients"
    },
    {
        label: "Dodaj Pacjenta",
        link: "/add-patient"
    }
];
