import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import {Home} from "../components/home/Home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
