import React from "react";
import genreCss from "./GenreComponent.module.css";
import Action from "../../assets/Image/action.png";
import Drama from "../../assets/Image/drama.png";
import Romance from "../../assets/Image/romance.png";
import Thriller from "../../assets/Image/thriller.png";
import Western from "../../assets/Image/western.png";
import Horror from "../../assets/Image/horror.png";
import Fantasy from "../../assets/Image/fantasy.png";
import Music from "../../assets/Image/music.png";
import Fiction from "../../assets/Image/fiction.png";
import Card from "./Card";
const cards = [
  { name: "Action", img: Action, color: "#FF5209" },
  { name: "Drama", img: Drama, color: "#D7A4FF" },
  { name: "Romance", img: Romance, color: "#148A08" },
  { name: "Thriller", img: Thriller, color: "#84C2FF" },
  { name: "Western", img: Western, color: "#902500" },
  { name: "Horror", img: Horror, color: "#7358FF" },
  { name: "Fantasy", img: Fantasy, color: "#FF4ADE" },
  { name: "Music", img: Music, color: "#E61E32" },
  { name: "Fiction", img: Fiction, color: "#6CD061" },
];
const GenreComponent = () => {
  return (
    <div className={genreCss.genreComponent}>
      {cards.map((card) => (
        <Card
          name={card.name}
          image={card.img}
          color={card.color}
          key={card.name}
        />
      ))}
    </div>
  );
};

export default GenreComponent;
