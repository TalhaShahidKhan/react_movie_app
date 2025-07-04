import { useContext, useState } from "react";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Cart from "../assets/shopping-cart.svg";
import { MovieContext } from "../contexts/movieContext";
import { ThemeContext } from "../contexts/themeContext";
import MovieCart from "./MovieCart";
export default function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { movies } = useContext(MovieContext);
  const [showCart, setShowCart] = useState(false);
  const handleCartClose = () => {
    setShowCart(false);
  };
  return (
    <header>
      {showCart && <MovieCart onClose={handleCartClose} />}
      <nav className="container flex items-center justify-between py-6 mx-auto space-x-10">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href=""
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              <img src={darkMode ? Sun : Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => {
                setShowCart(true);
              }}
            >
              <img src={Cart} width="24" height="24" alt="" />
              {movies.length > 0 && (
                <div className="absolute z-10 w-6 h-6 rounded-full -top-3 -right-3 bg-primary">
                  <p align="center">{movies.length}</p>
                </div>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
