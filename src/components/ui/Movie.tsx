import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Movie = ({ movie }: any) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <h2>{movie.title}</h2>
      <Image className="movie-pic"
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt="movie_image"
        width={100}
        height={300}
      />
    </motion.div>
  );
};

export default Movie;
