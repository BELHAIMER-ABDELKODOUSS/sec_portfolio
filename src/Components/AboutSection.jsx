import React from "react";
import home1 from "../img/home1.png";
import { motion } from "framer-motion";
import { titleAnim, fade, imgAnim } from "../animations";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <div>
      <main className="main-container">
        <section className="left-section">
          <div className="describ">
            <div className="title">
              <motion.h1 variants={titleAnim}>
                We work to make <br />
              </motion.h1>
              <motion.h1 variants={titleAnim}>
                your <span>dreams</span>
              </motion.h1>
              <br />
              <motion.h1 variants={titleAnim}>come true.</motion.h1>
            </div>
            <div className="paragraph">
              <motion.p variants={fade}>
                Contact us for any photographyor videography ideas that you
                have.
              </motion.p>
              <motion.p variants={fade}>
                We have professionals with amazing skills to help you achieve
                it.
              </motion.p>
            </div>
            <motion.div className="button-container" variants={fade}>
              <button>Contact Us</button>
            </motion.div>
          </div>
        </section>
        <section className="right-section">
          <motion.img variants={imgAnim} src={home1} alt="image" />
        </section>
        <Wave />
      </main>
    </div>
  );
};

export default AboutSection;
