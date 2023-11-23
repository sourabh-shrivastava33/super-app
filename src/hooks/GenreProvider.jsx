import React, { createContext, useContext, useState } from "react";
const GenreContext = createContext();
const GenreProvider = ({ children }) => {
  const [genre, setGenre] = useState([]);
  return (
    <GenreContext.Provider value={{ genre, setGenre }}>
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
