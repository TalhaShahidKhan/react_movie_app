import { useState } from "react";
import Page from "./components/Page";
import { MovieContext } from "./contexts/movieContext";
import { ThemeContext } from "./contexts/themeContext";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [movies, setMovies] = useState([]);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ movies, setMovies }}>
        <Page />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}
