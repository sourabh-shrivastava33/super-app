export function getGenre(event) {
  if (event.target.tagName === "P" || event.target.tagName === "IMG") {
    return event.target.parentElement.id;
  } else if (event.target.tagName === "DIV") {
    return event.target.id;
  }
}
export function randomNum() {
  return Math.floor(Math.random() * 100 + 1);
}

export function GetTimeData(type = "date") {
  const date = new Date();
  if (type === "date") {
    return new Intl.DateTimeFormat("en-In", {
      dateStyle: "short",
    }).format(date);
  } else if (type === "time") {
    return new Intl.DateTimeFormat("en", {
      timeStyle: "short",
    }).format(date);
  }
}

export const genreId = {
  Action: 28,
  Drama: 18,
  Romance: 10749,
  Thriller: 53,
  Western: 37,
  Horror: 27,
  Fantasy: 14,
  Music: 10402,
  Fiction: 878,
};
