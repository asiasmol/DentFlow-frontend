import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import {Home} from "../components/home/Home";
import {menuItems} from "./menuItems";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar  menuItems={menuItems}/>}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
