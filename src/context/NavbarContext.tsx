import React, {createContext, useContext, useEffect, useState} from "react";
import {link} from "../models/Link";
import {UnLoginPages} from "../models/pages/UnLoginPages";
import {NavbarContextType} from "../models/pages/NavbarContextType";
import {UserContext} from "./UserContext";
import {DoctorPages} from "../models/pages/DoctorPages";
import {OwnerPages} from "../models/pages/OwnerPages";


const defaultSettings: NavbarContextType = {
    currentPages: UnLoginPages,
    pagesModifier: (pages: link[]) => {},
};

export const NavbarContext = createContext<NavbarContextType>(defaultSettings);

export const NavbarContextProvider = ({ children }: React.PropsWithChildren) => {
    const [currentPages, setCurrentPages] = useState<link[] >([]);
    const {currentUser} = useContext(UserContext);

    const pagesModifier = (pages: link[] ) => {
        setCurrentPages(pages);
    };

    useEffect(() => {
        if(currentUser?.roles.includes("DOCTOR")){
            pagesModifier(DoctorPages)
        } else if (currentUser?.roles.includes("RECEPTIONIST")){
            pagesModifier(DoctorPages)
        }
        else if (currentUser?.roles.includes("OWNER")){
            pagesModifier(OwnerPages)
        }else {
            pagesModifier(UnLoginPages);
        }

    }, [currentUser?.roles]);

    return (
        <NavbarContext.Provider value={{ currentPages, pagesModifier }}>
            {children}
        </NavbarContext.Provider>
    );
};


