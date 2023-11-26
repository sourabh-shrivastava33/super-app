import React from "react";
import categoryCss from "./GenreCategory.module.css";
import GenreComponent from "./GenreComponent";
import { useGenre } from "../../hooks/GenreProvider";
import { useNavigate } from "react-router-dom";
const GenreCateGory = () => {
  const navigate = useNavigate();
  const { setValidGenreLength, genre, validGenreLength } = useGenre();
  function handleNextPageClick() {
    if (genre.length < 3) {
      setValidGenreLength(false);
    } else {
      setValidGenreLength(true);
      navigate("/");
    }
  }

  return (
    <div className={categoryCss.category}>
      <GenreComponent />
      <div className={categoryCss.next}>
        <button onClick={handleNextPageClick}>Next page</button>
      </div>
    </div>
  );
};

export default GenreCateGory;
