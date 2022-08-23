import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import theracer from "../img/theracer-small.png";
import theracer2 from "../img/the-racer2.jpg";
import { pageAnimation } from "../animations";
import { motion } from "framer-motion";

const MovieDetail = () => {
  return (
    <motion.div
      className="movie-detail-container"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="info">
        <h1>The Racer</h1>
        <img src={theracer} alt="the racer" />
      </div>
      <div className="awards">
        <div className="award-cards">
          <div className="award-card">
            <h3 className="award-title">Truly A masterpiece</h3>
            <div className="award-title-underline"></div>
            <p className="award-description">
              “Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.”
            </p>
          </div>
          <div className="award-card">
            <h3 className="award-title">Fresh look on a brutal sport.</h3>
            <div className="award-title-underline"></div>
            <p className="award-description">
              “Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.”
            </p>
          </div>
          <div className="award-card">
            <h3 className="award-title">It’s okay lmao.</h3>
            <div className="award-title-underline"></div>
            <p className="award-description">
              “Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.”
            </p>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <img src={theracer2} alt="the racer 2" />
      </div>
    </motion.div>
  );
};

export default MovieDetail;
