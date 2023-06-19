/* eslint-disable */
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import {
  FaHome,
  FaChartLine,
  FaHackerNews,
  FaCloudversify,
  FaFreeCodeCamp,
  FaGithub,
  FaGoogle,
  FaMailBulk,
} from "react-icons/fa";

const SideMenu = ({ loginstate, SetLoginState }) => {
  return (
    <div>
      <div className="sidemenu">
        <h1 className="logo">
          <Link to="/" className="logo">
            Naver <strong>VIBE</strong>
          </Link>
        </h1>

        <ul className="side-list">
          <li className="side-content">
            <Link to="/today" className="side-content">
              <FaHome className="icon-margin" />
              투데이
            </Link>
          </li>
          <li className="side-content">
            <Link to="/page2" className="side-content">
              <FaChartLine className="icon-margin" />
              차트
            </Link>
          </li>
          <li className="side-content">
            <Link to="/page3" className="side-content">
              <FaHackerNews className="icon-margin" />
              최신엘범
            </Link>
          </li>
          <li className="side-content">
            <Link to="/page3" className="side-content">
              <FaCloudversify className="icon-margin" />
              스테이션
            </Link>
          </li>
          <li className="side-content">
            <Link to="/page3" className="side-content">
              <FaFreeCodeCamp className="icon-margin" />
              이달의노래
            </Link>
          </li>
        </ul>

        <div className="extra-menu">
          <div className="extra-content">
            <h1>#내돈내산</h1>
            <h1>ON STAGE</h1>
            <h1>VIBE 오디오</h1>
          </div>
        </div>

        <div className="auth">
          <Link
            to="/login"
            className="login-btn"
            onClick={() => {
              SetLoginState(!loginstate);
            }}
          >
            로그인
          </Link>
          <Link to="/today">
            <div className="login-btn" onClick={() => {}}>
              게시판
            </div>
          </Link>
        </div>
        <div className="contect">
          <FaGithub />
          <FaGoogle />
          <FaMailBulk />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
