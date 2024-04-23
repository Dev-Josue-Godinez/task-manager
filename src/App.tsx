import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
