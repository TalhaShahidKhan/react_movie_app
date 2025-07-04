import { useContext, useState } from "react";
import Tag from "../assets/tag.svg";
import { MovieContext } from "../contexts/movieContext";
import { getImgUrl } from "../utils/movieUtils";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movies, setMovies } = useContext(MovieContext);
  const handleShowModal = () => {
    setShowModal(!showModal);
    setSelectedMovie(null);
  };

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();
    const found = movies.find((item) => item.id === movie.id);
    if (!found) {
      setMovies([...movies, movie]);
    } else {
      throw Error("This is already in the cart");
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleShowModal}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure
        className="p-4 border shadow-sm cursor-pointer border-black/10 dark:border-white/10 rounded-xl"
        onClick={() => {
          setSelectedMovie(movie);
          setShowModal(true);
        }}
      >
        <img
          className="object-cover w-full"
          src={getImgUrl(movie.cover)}
          alt=""
        />
        <figcaption className="pt-4 ">
          <h3 className="mb-1 text-xl dark:text-white">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center mb-5 space-x-1">
            <Rating value={movie.rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={(e) => {
              handleAddToCart(e, movie);
            }}
          >
            <img src={Tag} alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}
