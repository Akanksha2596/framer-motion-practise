import { useEffect, useState } from "react";
import Movie from "./Movie";
import FilterFunction from "./FilterFunction";
import {motion , AnimatePresence} from "framer-motion";

const Filter = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState<number>(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4ce05c2ceffc42b6b473db7378eb6ffd"
    );
    const movies = await data.json();
    console.log(movies, "movies data");
    setPopular(movies.results);
    setFiltered(movies.results);
  };
  return (
    <div>
      <div style={{display: "flex" , margin:"10px", justifyContent:"center"}}>
      <FilterFunction popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      </div>
      <motion.div className="popular-movies" layout>
        <AnimatePresence>
        {filtered.map((movie: any) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Filter;
