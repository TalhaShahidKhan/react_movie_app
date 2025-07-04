import MovieList from "./MovieList";
import Sidebar from "./Sidebar";

export default function Main() {
  return (
    <main>
      <div className="container mx-auto grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <MovieList />
      </div>
    </main>
  );
}
