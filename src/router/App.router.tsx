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
import { AddEmplyee } from "../components/addEmployee/AddEmplyee";
import {OwnerProtectedRoute} from "../components/OwnerProtectedRoute";
import { Clinic } from "../components/clinic/Clinic";
import {SetContainter} from "../components/SetContainter";
import {AddPatient} from "../components/addPatient/AddPatient";
import {MyClinic} from "../components/clinic/MyClinic/MyClinic";
import { NonOwnerProtectedRoot } from "../components/NonOwnerProtectedRoot";




export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
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
              path="/clinics"
              element={
               <ProtectedRoute>
                   <NonOwnerProtectedRoot>
                       <ChooseClinic />
                   </NonOwnerProtectedRoot>
              </ProtectedRoute>
              }
          ></Route>
            <Route
                path="/clinic"
                element={
                    <ProtectedRoute>
                        <Clinic  />
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
                    <ProtectedRoute>
                        <ClinicRegistration />
                    </ProtectedRoute>
                }
            ></Route>
            <Route
                path="/add-employee"
                element={
                    <ProtectedRoute>
                        <OwnerProtectedRoute>
                                <AddEmplyee />
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
        </Route>
    </Routes>
  );
};
