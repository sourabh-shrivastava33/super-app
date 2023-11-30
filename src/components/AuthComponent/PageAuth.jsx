import React from "react";
import { Navigate } from "react-router-dom";

const PageAuth = ({ children }) => {
  const signedUp = localStorage.getItem("formValues") ? true : false;
  const genreSelected =
    localStorage.getItem("genre") &&
    JSON.parse(localStorage.getItem("genre")).length !== 0 &&
    JSON.parse(localStorage.getItem("genre")).length >= 3
      ? true
      : false;
  return signedUp ? (
    genreSelected ? (
      children
    ) : (
      <Navigate to="/genre" replace />
    )
  ) : (
    <Navigate to="/register" replace />
  );
};

export default PageAuth;
