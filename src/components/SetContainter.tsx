import React from "react";
import {Navbar} from "./navbar/Navbar";
import {Outlet} from "react-router-dom";


export const SetContainter=() => {
    return(
        <>
        <Navbar/>
            <Outlet/>
            {/*<Footer/>*/}
        </>
    );
}