import React, { createContext, useContext, useState } from "react";
const GenreContext = createContext();
const GenreProvider = ({ children }) => {
  const [genre, setGenre] = useState(() => {
    const storedGenre = JSON.parse(localStorage.getItem("genre"));
    return storedGenre ? storedGenre : [];
  });
  const [validGenreLength, setValidGenreLength] = useState(true);

  return (
    <GenreContext.Provider
      value={{ genre, setGenre, setValidGenreLength, validGenreLength }}
    >
      {children}
    </GenreContext.Provider>
  );
};
export function useGenre() {
  const genre = useContext(GenreContext);
  if (!genre) {
    throw new Error("Context is using outside provider");
  }
  return genre;
}

export default GenreProvider;
