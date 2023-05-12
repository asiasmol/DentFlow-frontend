import { Navigate } from "react-router-dom";
import React, {useContext} from "react";
import { ACCESS_TOKEN } from "../constants/constants";
import {CalendarContext} from "../context/CalendarContext";
import {ClinicContext} from "../context/ClinicContext";

export const SelectedProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const {currentClinic} = useContext(ClinicContext);
  if (currentClinic?.id===0) {
    return <Navigate to={"/clinics"} replace />;
  }
  return <>{children}</>;
};
