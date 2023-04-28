import React from "react";
import {Navbar} from "./navbar/Navbar";
import {Outlet} from "react-router-dom";
import { Footer } from "./footer/Footer";


export const SetContainter=() => {
    return(
        <>
        <Navbar/>
            <Outlet/>
            {/*<Footer/>*/}
        </>
    );
}