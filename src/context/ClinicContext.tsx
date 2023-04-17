import React, {createContext, useCallback, useEffect, useState} from "react";
import {ClinicContextType} from "../models/ClinicContextType";
import {Clinic} from "../models/Clinic";
import {ClinicApi} from "../api/ClinicApi";



const defaultSettings: ClinicContextType = {
    currentClinic: null,
    clinicModifier: (clinic: Clinic | null) => {},
};

export const ClinicContext = createContext<ClinicContextType>(defaultSettings);

export const ClinicContextProvider = ({ children }: React.PropsWithChildren) => {
    const [currentClinic, setCurrentClinic] = useState<Clinic | null>(null);

    const clinicModifier = (clinic: Clinic  | null) => {
        setCurrentClinic(clinic);
    };
    const fetchClinic = useCallback(async () => {
        const myClinic = await ClinicApi.getMyClinic();
        clinicModifier(myClinic.data);
    }, []);

    useEffect(() => {
        if (!currentClinic) {
            fetchClinic();
        }
    }, [fetchClinic,currentClinic]);

    return (
        <ClinicContext.Provider value={{ currentClinic, clinicModifier}}>
            {children}
        </ClinicContext.Provider>
    );
};


