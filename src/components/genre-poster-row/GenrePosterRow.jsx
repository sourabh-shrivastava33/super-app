import React, { useEffect, useState } from "react";
import Poster from "../poster/Poster";
import genreRowCss from "./GenrePosterRow.module.css";
import { useMoviesApi } from "../../hooks/useMovieApi";

const GenrePosterRow = ({ name, id }) => {
  const { movies = [], loading } = useMoviesApi(id);

  if (loading) {
    return (
      <div className={genreRowCss.component}>
        <p className={genreRowCss.name}>{name}</p>
        <div className={genreRowCss.loading}>Loading...</div>
      </div>
    );
  } else
    return (
      <div className={genreRowCss.component}>
        <p className={genreRowCss.name}>{name}</p>
        <div className={genreRowCss.images}>
          {movies?.map((el) => (
            <Poster path={el.backdrop_path} key={el.id} />
          ))}
        </div>
      </div>
    );
};

export default GenrePosterRow;
