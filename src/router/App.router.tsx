import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import {Home} from "../components/home/Home";
import {pages} from "../models/pages";
import {Login} from "../components/login/Login";
import {Profile} from "../components/profile/Profile";
import {ProtectedRoute} from "../components/ProtectedRoute";
import {UnauthorizedRoute} from "../components/UnauthorizedRoute";
import UserRegistration from "../components/registration/UserRegistration";
import ClinicRegistration from "../components/registration/ClinicRegistration";
import {ChooseClinic} from "../components/chooseClinic/ChooseClinic";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar  pages={pages}/>}>
        <Route index element={<Home />} />
          <Route
              path="/Clinics"
              element={
               <ProtectedRoute>
                 <ChooseClinic />
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
              element={<ClinicRegistration/>}
          ></Route>
      </Route>
    </Routes>
  );
};
