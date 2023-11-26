import React from "react";
import tagsCss from "./Tags.module.css";
import { useGenre } from "../../hooks/GenreProvider";
const Tags = ({ name, type }) => {
  const { setGenre, genre } = useGenre();
  function handleDelete(e) {
    const newGenres = [...genre].filter(
      (item) => item.name !== e.target.parentElement.id
    );
    localStorage.setItem("genre", JSON.stringify(newGenres));
    setGenre(newGenres);
  }
  if (type === "select") {
    return (
      <p className={tagsCss.tags} id={name}>
        <span>{name}</span>
        <span className={tagsCss.delete} onClick={handleDelete}>
          X
        </span>
      </p>
    );
  }
  if (type === "selected") {
    return (
      <p className={tagsCss.select} id={name}>
        {name}
      </p>
    );
  }
};

export default Tags;
