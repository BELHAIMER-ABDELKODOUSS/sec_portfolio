import React from "react";
import MovieState from "../movieState";
import data from "../data";
import athlete from "../img/athlete-small.png";
import { pageAnimation, slider, sliderContainer } from "../animations";
import { motion } from "framer-motion";

const OurWork = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="movies-container"
    >
      <motion.div variants={sliderContainer}>
        <motion.div variants={slider} className="frame1"></motion.div>
        <motion.div variants={slider} className="frame2"></motion.div>
        <motion.div variants={slider} className="frame3"></motion.div>
        <motion.div variants={slider} className="frame4"></motion.div>
      </motion.div>
      {data.map((movie) => (
        <div className="movie" key={movie.id}>
          <h1 className="movie-title">{movie.title}</h1>
          <div className="movie-underline"></div>
          <img src={movie.mainImg} alt="image" />
        </div>
      ))}
    </motion.div>
  );
};

export default OurWork;
