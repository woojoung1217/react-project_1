/* eslint-disable */
import React, { useState } from "react";
import SideMenu from "./sidebar";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import LoginSection from "./login";
import Today from "./today";

const AppRouter = () => {
  const [loginstate, SetLoginState] = useState(false);
  return (
    <>
      <SideMenu
        loginstate={loginstate}
        SetLoginState={SetLoginState}
      ></SideMenu>
      <Routes>
        <Route
          path="/login"
          element={
            loginstate === true ? (
              <LoginSection
                loginstate={loginstate}
                SetLoginState={SetLoginState}
              />
            ) : null
          }
        ></Route>
      </Routes>

      <Routes>
        <Route path="/today" element={<Today />}></Route>
      </Routes>
    </>
  );
};
export default AppRouter;
