import React from "react";
import genreContainerCss from "./GenreTagContainer.module.css";
import Tags from "../tags/Tags";
import { useGenre } from "../../hooks/GenreProvider";
const GenreContainer = () => {
  const { genre } = useGenre();
  return (
    <div className={genreContainerCss.container}>
      {genre.map((genre) => (
        <Tags name={genre.name} key={genre.id} type="select" />
      ))}
    </div>
  );
};

export default GenreContainer;
