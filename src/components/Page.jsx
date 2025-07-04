import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

export default function Page() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen min-w-screen dark:bg-gray-800`}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
