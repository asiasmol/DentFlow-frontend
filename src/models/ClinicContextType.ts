import {Clinic} from "./Clinic";


export type ClinicContextType = {
  currentClinic: Clinic | null;
  clinicModifier: (clinic: Clinic | null) => void;
};
