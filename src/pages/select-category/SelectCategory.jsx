import React, { useEffect } from "react";
import genreCss from "./SelectCategory.module.css";
import GenreSidebar from "../../components/genre-sidebar/GenreSidebar";
import GenreCateGory from "../../components/genre-catergory/GenreCateGory";
import { useNavigate } from "react-router-dom";
const SelectCategory = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("genre")) &&
      JSON.parse(localStorage.getItem("genre")).length > 3
    ) {
      navigate("/home", { replace: true });
    } else {
      return;
    }
  }, []);
  return (
    <div className={genreCss.genre}>
      <GenreSidebar />
      <GenreCateGory />
    </div>
  );
};

export default SelectCategory;
