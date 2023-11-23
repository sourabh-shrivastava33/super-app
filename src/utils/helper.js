export function getGenre(event) {
  if (event.target.tagName === "P" || event.target.tagName === "IMG") {
    return event.target.parentElement.id;
  } else if (event.target.tagName === "DIV") {
    return event.target.id;
  }
}
