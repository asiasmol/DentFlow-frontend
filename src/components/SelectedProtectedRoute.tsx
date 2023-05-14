import { Navigate } from "react-router-dom";
import React, {useContext} from "react";
import {ClinicContext} from "../context/ClinicContext";

export const SelectedProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const {currentClinic} = useContext(ClinicContext);
  if (currentClinic?.id===0) {
    return <Navigate to={"/clinics-choice"} replace />;
  }
  return <>{children}</>;
};
