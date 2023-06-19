/* eslint-disable */
import React from "react";
import SideMenu from "./Components/sidebar";
import Main from "./Components/Main";
import LoginSection from "./Components/login";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import AppRouter from "./Components/Router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
      <AppRouter></AppRouter>
    </div>
  );
}

export default App;
