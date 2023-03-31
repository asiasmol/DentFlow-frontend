import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import {Home} from "../components/home/Home";
import {menuItems} from "../models/menuItems";
import {Login} from "../components/login/Login";
import {Profile} from "../components/profile/Profile";
import {ProtectedRoute} from "../components/ProtectedRoute";
import {UnauthorizedRoute} from "../components/UnauthorizedRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar  menuItems={menuItems}/>}>
        <Route index element={<Home />} />
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
      </Route>
    </Routes>
  );
};
