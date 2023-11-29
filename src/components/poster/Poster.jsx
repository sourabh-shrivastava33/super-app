import React from "react";
import posterImageCss from "./poster.module.css";
const Poster = ({ path }) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${path}`}
        alt="image"
        id={path}
        className={posterImageCss.image}
      />
    </>
  );
};

export default Poster;
