import React from "react";
import genreCss from "./SelectCategory.module.css";
import GenreSidebar from "../../components/genre-sidebar/GenreSidebar";
import GenreCateGory from "../../components/genre-catergory/GenreCateGory";
const SelectCategory = () => {
  return (
    <div className={genreCss.genre}>
      <GenreSidebar />
      <GenreCateGory />
    </div>
  );
};

export default SelectCategory;
