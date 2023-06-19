/* eslint-disable */
import { React } from "react";
import Main from "./Main";
import { FaTimes } from "react-icons/fa";

const LoginSection = ({ loginstate, SetLoginState }) => {
  return (
    <div className="login-cover">
      <div className="login">
        <div className="login-Form">
          <div className="login-exit">
            <FaTimes
              onClick={() => {
                SetLoginState(!loginstate);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
