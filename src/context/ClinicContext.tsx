import React, {createContext, useContext, useEffect, useState} from "react";
import {ClinicContextType} from "../models/context/ClinicContextType";
import {Clinic} from "../models/Clinic";
import {ClinicApi} from "../api/ClinicApi";
import {CLINIC_ID, CLINIC_NAME, CLINIC_PHONE} from "../constants/constants";
import {UserContext} from "./UserContext";





const defaultSettings: ClinicContextType = {
    currentClinic: null,
    clinicModifier: (clinic: Clinic | null) => {},
};

export const ClinicContext = createContext<ClinicContextType>(defaultSettings);

export const ClinicContextProvider = ({ children }: React.PropsWithChildren) => {
    const [currentClinic, setCurrentClinic] = useState<Clinic | null>(null);
    const {currentUser} = useContext(UserContext);
    const clinicModifier = (clinic: Clinic  | null) => {
        console.log(clinic)
        setCurrentClinic(clinic);
    };

    useEffect(() => {
        if (!currentClinic && currentUser) {
            ClinicApi.getMyClinic().then(r => {
                if(!r.data){
                    clinicModifier({
                        id: Number(localStorage.getItem(CLINIC_ID)),
                        name: localStorage.getItem(CLINIC_NAME) as "",
                        phoneNumber:localStorage.getItem(CLINIC_PHONE) as ""
                    });
                }else{
                    clinicModifier(r.data);
                }
            });

        }
    }, [currentClinic,currentUser]);

    return (
        <ClinicContext.Provider value={{ currentClinic, clinicModifier}}>
            {children}
        </ClinicContext.Provider>
    );
};


