import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import cardio from "../img/cardio.png";
import yoga from "../img/yoga.png";
import weights from "../img/weights.png";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, fade, photoAnim, lineAnim } from "./animation";

const OurRoutines = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Exercise>
        <motion.h2 variants={fade}>Cardio</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/cardio">
          <Hide>
            <motion.img variants={photoAnim} src={cardio} alt="rope" />
          </Hide>
        </Link>
      </Exercise>
      <Exercise>
        <h2>Yoga</h2>
        <div className="line"></div>
        <Link to="/work/yoga">
          <img src={yoga} alt="yoga" />
        </Link>
      </Exercise>
      <Exercise>
        <h2>Weights</h2>
        <div className="line"></div>
        <Link to="/work/weights">
          <img src={weights} alt="weights" />
        </Link>
      </Exercise>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
`;
const Exercise = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.3rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default OurRoutines;
