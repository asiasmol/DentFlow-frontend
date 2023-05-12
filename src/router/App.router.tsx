import React from "react";
import { Routes, Route } from "react-router-dom";
import {Login} from "../components/login/Login";
import {Profile} from "../components/profile/Profile";
import {ProtectedRoute} from "../components/ProtectedRoute";
import {UnauthorizedRoute} from "../components/UnauthorizedRoute";
import UserRegistration from "../components/registration/UserRegistration";
import {ChooseClinic} from "../components/chooseClinic/ChooseClinic";
import HomePage from "../pages/homePage/HomePage";
import ClinicRegistration from "../components/registration/ClinicRegistration";
import { AddEmployee } from "../components/addEmployee/AddEmployee";
import {OwnerProtectedRoute} from "../components/OwnerProtectedRoute";
import {SetContainter} from "../components/SetContainter";
import {AddPatient} from "../components/addPatient/AddPatient";
import {MyClinic} from "../components/MyClinic/MyClinic";
import { NonOwnerProtectedRoot } from "../components/NonOwnerProtectedRoot";
import PatientsList from "../components/PatientsList/PatientsList";
import {Calendar} from "../components/calendar/Calendar";
import {CalendarContextProvider} from "../context/CalendarContext";
import {Pricing} from "../components/pricing/Pricing";
import {NotFound} from "../pages/notFoundPage/NotFound";
import { SendEmail } from "../components/resetPassword/SendEmail";
import {ResetPassword} from "../components/resetPassword/ResetPassword";
import {SelectedProtectedRoute} from "../components/SelectedProtectedRoute";
import { ResetEmail } from "../components/resetPassword/ResetEmail";
import PatientDetails from "../patientDetails/PatientDetails";





export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/"
             element={
          <>
              <HomePage />
              <Pricing />
          </>
      }></Route>
        <Route element={<SetContainter/>}>
            <Route
                path="/my-clinic"
                element={
                    <ProtectedRoute>
                        <OwnerProtectedRoute>
                            <MyClinic />
                        </OwnerProtectedRoute>
                    </ProtectedRoute>
                }
            ></Route>
            <Route
                path="/forgot-password"
                element={
                    <SendEmail/>
                }
            ></Route>
            <Route
                path="/reset-password"
                element={
                    <ResetPassword/>
                }
            ></Route>
            <Route
                path="/reset-email"
                element={
                    <ResetEmail/>
                }
            ></Route>
            <Route
              path="/clinics"
              element={
               <ProtectedRoute>
                   <NonOwnerProtectedRoot>
                       <ChooseClinic />
                   </NonOwnerProtectedRoot>
              </ProtectedRoute>
              }
          ></Route>
            <Route path="/patients"
             element={
                 <ProtectedRoute>
                         <PatientsList />
                 </ProtectedRoute>
             }>
            </Route>
            <Route path="/patients/:lastName" element={<PatientDetails />} />
            <Route
                path="/clinic"
                element={
                    <ProtectedRoute>
                        <CalendarContextProvider>
                            <SelectedProtectedRoute>
                                <Calendar />
                            </SelectedProtectedRoute>
                        </CalendarContextProvider>
                    </ProtectedRoute>
                }
            ></Route>
          <Route
              path="/login"
              element={
                  <UnauthorizedRoute>
                      <Login />
                  </UnauthorizedRoute>
              }
          ></Route>
          <Route
              path="/profile"
              element={
                  <ProtectedRoute>
                      <Profile />
                  </ProtectedRoute>
              }
          ></Route>
          <Route
              path="/user-registration"
              element={<UserRegistration/>}
          ></Route>
            <Route
                path="/clinic-registration"
                element={
                        <ClinicRegistration />
                }
            ></Route>
            <Route
                path="/add-employee"
                element={
                    <ProtectedRoute>
                        <OwnerProtectedRoute>
                                <AddEmployee />
                        </OwnerProtectedRoute>
                    </ProtectedRoute>
                }
            ></Route>
            <Route
                path="/add-patient"
                element={
                    <ProtectedRoute>
                        <AddPatient />
                    </ProtectedRoute>
                }
            ></Route>
            <Route
                path="/pricing"
                element={
                    <Pricing/>
                }
            ></Route>
            <Route
                path="*"
                element={<NotFound />}>
            </Route>
        </Route>

    </Routes>
  );
};
