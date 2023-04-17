import React, { createContext, useEffect, useState } from "react";
import {link} from "../models/Link";
import {UnLoginPages} from "../models/pages/UnLoginPages";
import {NavbarContextType} from "../models/pages/NavbarContextType";




const defaultSettings: NavbarContextType = {
    currentPages: UnLoginPages,
    pagesModifier: (pages: link[]) => {},
};

export const NavbarContext = createContext<NavbarContextType>(defaultSettings);

export const NavbarContextProvider = ({ children }: React.PropsWithChildren) => {
    const [currentPages, setCurrentPages] = useState<link[] >([]);

    const pagesModifier = (pages: link[] ) => {
        setCurrentPages(pages);
    };
    useEffect(() => {
        pagesModifier(UnLoginPages);
    }, [pagesModifier]);
    return (
        <NavbarContext.Provider value={{ currentPages, pagesModifier }}>
            {children}
        </NavbarContext.Provider>
    );
};


