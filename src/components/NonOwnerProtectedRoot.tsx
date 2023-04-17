import React, {useContext} from "react";
import { Navigate } from "react-router-dom";
import {UserContext} from "../context/UserContext";
export const NonOwnerProtectedRoot = ({children}:React.PropsWithChildren) =>{
    const {currentUser} = useContext(UserContext);
    if(currentUser?.roles.includes("OWNER")){
        return <Navigate to={"/my-clinic"} replace/>;
    }
    return <>{children}</>;
}