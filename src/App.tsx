import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/movie/:id" element={<Home />} />

      

        {/* <Route path="/router/*" element={<Router2 />} /> */}

        { <Route path="*" element={<Navigate to={"/home"} />} /> }

      </Routes>
    </BrowserRouter>
  );
}

export default App;
