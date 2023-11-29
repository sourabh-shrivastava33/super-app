import React from "react";
import browserBodyCss from "./BrowserBody.module.css";
import GenrePosterRow from "../genre-poster-row/GenrePosterRow";
import { genreId } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

const BrowserBody = () => {
  const navigate = useNavigate();

  const genre = JSON.parse(localStorage.getItem("genre")).map((el) => el.name);
  return (
    <main className={browserBodyCss.body}>
      <p className={browserBodyCss.heading}>
        Entertainment according to your choice
      </p>
      <div className={browserBodyCss.posterRow}>
        {genre.map((el) => (
          <GenrePosterRow name={el} key={el} id={genreId[el]} />
        ))}
      </div>
      <div className={browserBodyCss.buttonContainer}>
        <button className={browserBodyCss.button} onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </main>
  );
};

export default BrowserBody;
