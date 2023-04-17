import { Navigate } from "react-router-dom";
import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";


export const OwnerProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const { currentUser} = useContext(UserContext);
  if (!currentUser?.roles.includes("DOCTOR")) {
    return <Navigate to={"/"} replace />;
  }
  return <>{children}</>;
};
