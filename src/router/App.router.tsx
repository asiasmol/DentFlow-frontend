import React from "react";
import { Routes, Route } from "react-router-dom";
import {Login} from "../components/login/Login";
import {Profile} from "../components/profile/Profile";
import {ProtectedRoute} from "../components/ProtectedRoute";
import {UnauthorizedRoute} from "../components/UnauthorizedRoute";
import UserRegistration from "../components/registration/UserRegistration";
import {ChooseClinic} from "../components/chooseClinic/ChooseClinic";
import HomePage from "../pages/homePage/HomePage";
import {Navbar} from "../components/navbar/Navbar";
import {pages} from "../models/pages";
import {Footer} from "../components/footer/Footer";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
        <Route element={<Navbar pages={pages} />}>
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
        </Route>
    </Routes>
  );
};
