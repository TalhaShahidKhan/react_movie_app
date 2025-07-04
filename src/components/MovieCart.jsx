import { useContext } from "react";
import Delete from "../assets/delete.svg";
import Checkout from "../assets/icons/checkout.svg";
import { MovieContext } from "../contexts/movieContext";
import { getImgUrl } from "../utils/movieUtils";

export default function MovieCart({ onClose }) {
  const { movies, setMovies } = useContext(MovieContext);
  const handleRemove = (movie) => {
    setMovies(movies.filter((m) => movie.id !== m.id));
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold dark:text-white ">
            Your Carts
          </h2>

          <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-40 overflow-hidden rounded "
                      src={getImgUrl(movie.cover)}
                      alt={movie.title}
                    />
                    <div>
                      <h3 className="text-base font-bold md:text-xl dark:text-white">
                        {movie.title}
                      </h3>
                      <p className="max-md:text-xs  text-[#575A6E]">
                        {movie.genre}
                      </p>
                      <span className="max-md:text-xs dark:text-white">
                        {movie.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <button className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white">
                      <img className="w-5 h-5" src={Delete} alt="" />
                      <span
                        className="max-md:hidden"
                        onClick={() => {
                          handleRemove(movie);
                        }}
                      >
                        Remove
                      </span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p align="center" className="dark:text-white">
                  Your Cart is Empty
                </p>
              </div>
            )}
          </div>
          <div className="flex items-center justify-end gap-2">
            <a
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              href="#"
            >
              <img src={Checkout} width="24" height="24" alt="" />
              <span>Checkout</span>
            </a>
            <a
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              href="#"
              onClick={onClose}
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
