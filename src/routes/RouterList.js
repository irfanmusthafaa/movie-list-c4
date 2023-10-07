import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Search } from "../pages/Search";
import { Nav } from "../assets/components/Nav";
import { AllMovies } from "../assets/components/AllMovies";

export const RouterList = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/all-movies" element={<AllMovies />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
