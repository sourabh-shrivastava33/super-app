import React from "react";
import posterCss from "./Poster.module.css";
const Poster = ({ path }) => {
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500${path}`}
        alt="image"
        className={posterCss.image}
      />
    </>
  );
};

export default Poster;
