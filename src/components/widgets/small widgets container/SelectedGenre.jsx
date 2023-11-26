import React from "react";
import selectedGenreCss from "./SelectedGenre.module.css";
import Tags from "../../tags/Tags";
const SelectedGenre = () => {
  const genres = JSON.parse(localStorage.getItem("genre"));

  return (
    <div className={selectedGenreCss.selectedCont}>
      {genres?.map((genre) => (
        <Tags name={genre.name} key={genre.id} type="selected" />
      ))}
    </div>
  );
};

export default SelectedGenre;
