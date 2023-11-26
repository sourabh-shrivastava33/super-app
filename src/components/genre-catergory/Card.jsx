import React, { useEffect } from "react";
import cardCss from "./Card.module.css";
import { getGenre } from "../../utils/helper";
import { useGenre } from "../../hooks/GenreProvider";
const Card = ({ name, image, color }) => {
  const {
    setGenre,
    genre: genreArr,
    validGenreLength,
    setValidGenreLength,
  } = useGenre();

  function handleClick(e) {
    const genre = getGenre(e);
    setGenre((prev) => {
      let newGenres;
      if (prev.find((item) => item.name === genre)) {
        newGenres = prev.filter((item) => item.name !== getGenre(e));
      } else {
        newGenres = [
          ...prev,
          { id: Math.floor(Math.random() * 99999 + 1), name: genre },
        ];
      }
      localStorage.setItem("genre", JSON.stringify(newGenres));
      if (newGenres.length >= 3 && !validGenreLength) {
        setValidGenreLength(true);
      }
      return newGenres;
    });
  }

  const selected = genreArr.find((item) => item.name === name)?.name === name;

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={`${cardCss.card} ${selected ? `${cardCss.selected}` : ""}`}
      onClick={handleClick}
      id={name}
    >
      <p>{name}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default Card;
