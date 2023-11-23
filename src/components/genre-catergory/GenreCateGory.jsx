import React from "react";
import categoryCss from "./GenreCategory.module.css";
import GenreComponent from "./GenreComponent";
const GenreCateGory = () => {
  return (
    <div className={categoryCss.category}>
      <GenreComponent />
      <div className={categoryCss.next}>
        <button>Next page</button>
      </div>
    </div>
  );
};

export default GenreCateGory;
