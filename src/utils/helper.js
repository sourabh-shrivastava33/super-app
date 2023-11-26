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
  console.log("called");
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
